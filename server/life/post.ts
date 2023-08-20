import { Express, Request, Response } from 'express';
import { Filter, FindOptions, Db, ObjectId } from 'mongodb';
import { authenticateToken } from './middleware';
import { decodePostId, encodePostId } from './utils/post-id';

const BASE_COUNT = 1000000;

export default async function postsApi(app: Express, db: Db) {
  /**
   * Endpoints
   */
  app.get('/life/posts', getPosts);
  app.get('/life/post/:postId', getPost);
  app.post('/life/post', createPost);
  app.post('/life/posts', createPosts);
  app.post('/life/post/:postId/interact', authenticateToken, interactWithPost);
  app.delete('/life/posts', removePosts);
  app.delete('/life/posts/:postId', removePosts);

  const postCollections = db.collection('post');

  async function getPosts(req: Request, res: Response) {
    const { limit = 10, page = 1, category } = req.query;
    const pageInt = parseInt(page as string);
    const limitInt = parseInt(limit as string);
    // Get total count
    const totalCount = await postCollections.countDocuments();
    // Find documents
    const findFilter = {} as Filter<any>;
    if (category) findFilter.category = category;
    const findOptions = {
      limit: limitInt,
      skip: (pageInt - 1) * limitInt,
      sort: { createdAt: -1 },
    } as FindOptions<any>;
    const postsCursor = postCollections.find(findFilter, findOptions);
    const posts = (await postsCursor.toArray()).map((post) => {
      const postContent = `${post.content}`;
      return {
        id: encodePostId(post.numId),
        title: post.title,
        content:
          postContent.length > 110
            ? postContent.substring(0, 110) + '...'
            : postContent,
        category: post.category,
        // createdAt: post.createdAt, // TBD whether to return right now as we don't show it
        owner: {
          avatar_url: post.owner.avatar_url,
          name: post.owner.name,
        },
        interactions: post.interactions,
      };
    });

    console.log('query again');

    // Send to the client side
    res.status(200).send(
      JSON.stringify({
        items: posts,
        count: totalCount,
        limit,
        page: pageInt,
      })
    );
  }

  async function getPost(req: Request, res: Response) {
    const { postId } = req.params;
    const numId = decodePostId(postId);
    const post: any = await postCollections.findOne({ numId });

    // Update the views every time we get post successfully
    postCollections.updateOne(
      { numId },
      {
        $inc: { 'interactions.views': 1 },
      }
    );

    // Send to the client side
    res.send(
      JSON.stringify({
        id: post._id,
        title: post.title,
        content: post.content,
        category: post.category,
        createdAt: post.createdAt,
        infos: post.infos,
        owner: post.owner,
        meta_data: post.meta_data,
        interactions: post.interactions,
        tags: post.tags,
      })
    );
  }

  function _generatePostObject({
    title,
    content,
    category,
    infos,
    owner,
    totalCount,
  }: {
    title: string;
    content: string;
    category: string;
    infos: any;
    owner: any;
    totalCount: number;
  }) {
    return {
      title,
      content,
      category,
      owner: {
        id: owner._id,
        name: owner.name,
        avatar_url: owner.avatar_url,
      },
      infos,
      createdAt: new Date(),
      interactions: {
        views: 0,
        likes: 0,
        comments: 0,
      },
      tags: [],
      numId: BASE_COUNT + totalCount + 1,
    };
  }

  async function createPost(req: Request, res: Response) {
    const { title, content, category, infos, owner_id } = req.body;
    if (title && content && category && owner_id) {
      const owner: any = await db
        .collection('user')
        .findOne({ _id: new ObjectId(owner_id) });
      if (owner) {
        const totalCount = await postCollections.countDocuments();
        const postObject = _generatePostObject({
          title,
          content,
          category,
          infos,
          owner,
          totalCount,
        });
        const resultsAfterInsert = await postCollections.insertOne(postObject);
        res.send(JSON.stringify(resultsAfterInsert));
      } else {
        res.status(400).send('Cannot find the author, owner_id is not valid');
      }
    } else {
      res.status(400).send('Missing required fields');
    }
  }

  async function createPosts(req: Request, res: Response) {
    // TODO
    const { posts, owner_id } = req.body;
    if (owner_id && posts?.length) {
      const owner: any = await db
        .collection('user')
        .findOne({ _id: new ObjectId(owner_id) });
      if (owner) {
        const totalCount = await postCollections.countDocuments();
        const postsList = posts.map(
          ({ title, content, category, infos }: any, index: number) =>
            _generatePostObject({
              title,
              content,
              category,
              infos,
              owner,
              totalCount: totalCount + index,
            })
        );
        const resultsAfterInsert = await postCollections.insertMany(postsList);
        res.send(JSON.stringify(resultsAfterInsert));
      } else {
        res.status(400).send('Cannot find the author, owner_id is not valid');
      }
    } else {
      res.status(400).send('Missing required fields');
    }
  }

  async function interactWithPost(req: Request, res: Response) {
    const { postId } = req.params;
    const { like } = req.body;
    const user_id = req.user.id;
    if (user_id && like) {
      const { liked_users = {} }: any = await postCollections.findOne({
        _id: new ObjectId(postId),
      });
      let likes = 0;
      if (liked_users[user_id]) {
        delete liked_users[user_id];
        likes = -1;
      } else {
        liked_users[user_id] = 1;
        likes = 1;
      }

      await postCollections.updateOne(
        { _id: new ObjectId(postId) },
        {
          $set: { liked_users },
          $inc: { 'interactions.likes': likes },
        }
      );
      const updatedPost: any = await postCollections.findOne({
        _id: new ObjectId(postId),
      });
      res.status(200).send({ interactions: updatedPost.interactions });
    } else {
      res.status(400).send('Missing required fields');
    }
  }

  async function removePosts(req: Request, res: Response) {
    const { postId } = req.params;
    if (postId) {
      await postCollections.deleteOne({
        _id: new ObjectId(postId),
      });
    } else {
      await postCollections.deleteMany({});
    }
    res.sendStatus(200);
  }
}

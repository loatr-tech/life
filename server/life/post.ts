import { Express, Request, Response } from 'express';
import { Filter, FindOptions, Db, ObjectId } from 'mongodb';
import { authenticateToken } from './middleware';


export default async function postsApi(app: Express, db: Db) {
  /**
   * Endpoints
   */
  app.get('/life/posts', getPosts);
  app.get('/life/post/:postId', getPost);
  app.post('/life/post', createPost);
  app.post('/life/post/:postId/interact', authenticateToken, interactWithPost);
  app.delete('/life/posts', removePosts);

  const postCollections = db.collection('post');

  async function getPosts(req: Request, res: Response) {
    const { limit = 10, category } = req.query;
    // Get total count
    const totalCount = await postCollections.countDocuments();
    // Find documents
    const findFilter = {} as Filter<any>;
    if (category) findFilter.category = category;
    const findOptions = { limit, sort: { createdAt: -1 } } as FindOptions<any>;
    const postsCursor = postCollections.find(findFilter, findOptions);
    const posts = (await postsCursor.toArray()).map((post) => {
      return {
        id: post._id,
        title: post.title,
        content: post.content,
        category: post.category,
        createdAt: post.createdAt,
        owner: post.owner,
        interactions: post.interactions,
      };
    });

    // Send to the client side
    res.send(
      JSON.stringify({
        items: posts,
        count: totalCount,
        limit,
      })
    );
  }

  async function getPost(req: Request, res: Response) {
    const { postId } = req.params;
    const post: any = await postCollections.findOne({
      _id: new ObjectId(postId),
    });

    // Update the views every time we get post successfully
    postCollections.updateOne(
      { _id: new ObjectId(postId) },
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

  async function createPost(req: Request, res: Response) {
    const { title, content, category, owner_id, infos } = req.body;
    if (title && content && category && owner_id) {
      const owner: any = await db
        .collection('user')
        .findOne({ _id: new ObjectId(owner_id) });
      if (owner) {
        const postObject = {
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
        };
        const resultsAfterInsert = await postCollections.insertOne(postObject);
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
    await postCollections.deleteMany({});
    res.sendStatus(200);
  }
}

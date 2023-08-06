import { Express, Request, Response } from 'express';
import { ObjectId, Db } from 'mongodb';
import { optionalToken } from './middleware';

export default async function threadsApi(app: Express, db: Db) {
  /**
   * Endpoints
   */
  app.get('/life/post/:postId/threads', optionalToken, getThreads);
  app.get('/life/post/:postId/thread/:threadId', optionalToken, getThread);
  app.post('/life/post/thread', createThread);
  app.post('/life/post/thread/:threadId/interact', interactWithThread);
  app.delete('/life/post/threads', removeThreads);

  const threadCollection = db.collection('thread');

  async function getThreads(req: Request, res: Response) {
    const { postId } = req.params;
    const { limit = 10, page = 1 } = req.query;
    // Find threads
    const threadsCursor = threadCollection.find({ post_id: postId });
    // Get total count of threads in current post
    const numOfThreads = await threadsCursor.count();
    // Apply filter to get paginated results
    threadsCursor
      .sort('createdAt', 1)
      .limit(parseInt(limit as string))
      .skip((parseInt(page as string) - 1) * parseInt(limit as string));
    const threads = (await threadsCursor.toArray()).map((thread) => {
      const threadObject: any = {
        id: thread._id,
        post_id: thread.post_id,
        comment: thread.comment,
        likes: thread.likes,
        dislikes: thread.dislikes,
        owner: thread.owner,
        replies: thread.replies,
        createdAt: thread.createdAt,
      };
      if (req.user && thread.interacted_users[req.user.id]) {
        threadObject.interacted = thread.interacted_users[req.user.id];
      }
      return threadObject;
    });

    res.send({
      threads,
      count: numOfThreads,
    });
  }

  async function getThread(req: Request, res: Response) {
    const { threadId } = req.params;
    if (threadId) {
      const thread: any = await threadCollection.findOne({
        _id: new ObjectId(threadId),
      });
      res.send({
        id: thread._id,
        post_id: thread.post_id,
        comment: thread.comment,
        likes: thread.likes,
        dislikes: thread.dislikes,
        owner: thread.owner,
        replies: thread.replies,
        createdAt: thread.createdAt,
      });
    }
  }

  async function createThread(req: Request, res: Response) {
    const { post_id, comment, owner_id } = req.body;
    if (post_id && owner_id) {
      const owner: any = await db
        .collection('user')
        .findOne({ _id: new ObjectId(owner_id) });
      if (owner) {
        const resultsAfterInsert = await threadCollection.insertOne({
          post_id,
          comment,
          likes: 0,
          dislikes: 0,
          owner: {
            id: owner._id,
            name: owner.name,
            avatar_url: owner.avatar_url,
          },
          interacted_users: {},
          createdAt: new Date(),
          replies: 0,
        });
        // Update comments count on the post
        await db
          .collection('post')
          .updateOne({ _id: new ObjectId(post_id) }, { $inc: { 'interactions.comments': 1 } });
        res.send(JSON.stringify(resultsAfterInsert));
      } else {
        res.status(400).send('Cannot find the author, owner_id is not valid');
      }
    } else {
      res.status(400).send('Missing required fields');
    }
  }

  async function interactWithThread(req: Request, res: Response) {
    const { threadId } = req.params;
    const { like, dislike, user_id } = req.body;
    if (user_id && (like || dislike)) {
      const { interacted_users = {} }: any = await threadCollection.findOne({
        _id: new ObjectId(threadId),
      });
      let likesAndDislikes = [0, 0];
      if (interacted_users[user_id] === (like ? 1 : -1)) {
        delete interacted_users[user_id];
        likesAndDislikes = like ? [-1, 0] : [0, -1];
      } else {
        if (interacted_users[user_id]) {
          likesAndDislikes = like ? [1, -1] : [-1, 1];
        } else {
          likesAndDislikes = like ? [1, 0] : [0, 1];
        }
        interacted_users[user_id] = like ? 1 : -1;
      }
      const [likes, dislikes] = likesAndDislikes;
      await threadCollection.updateOne(
        { _id: new ObjectId(threadId) },
        {
          $set: { interacted_users },
          $inc: { likes, dislikes },
        }
      );
      const updatedComment: any = await threadCollection.findOne({
        _id: new ObjectId(threadId),
      });
      res.status(200).send({
        likes: updatedComment.likes,
        dislikes: updatedComment.dislikes,
        interacted: interacted_users[user_id],
      });
    } else {
      res.status(400).send('Missing required fields');
    }
  }

  async function removeThreads(req: Request, res: Response) {
    await threadCollection.deleteMany({});
    res.sendStatus(200);
  }
}

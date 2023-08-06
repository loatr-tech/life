import { Express, Request, Response } from 'express';
import { ObjectId, Db } from 'mongodb';

export default async function repliesApi(app: Express, db: Db) {
  /**
   * Endpoints
   */
  app.get('/life/post/:postId/thread/:threadId/replies', getReplies);
  app.post('/life/post/reply', createReply);
  app.delete('/life/post/replies', removeReplies);

  const threadCollection = db.collection('thread');
  const replyCollection = db.collection('reply');

  async function getReplies(req: Request, res: Response) {
    const { threadId } = req.params;
    const { limit = 10, page = 1 } = req.query;
    // Find replies
    const repliesCursor = replyCollection.find({ thread_id: threadId });
    // Get total count of replies in current thread
    const numOfReplies = await repliesCursor.count();
    // Apply filter to get paginated results
    repliesCursor
      .sort('createdAt', 1)
      .limit(parseInt(limit as string))
      .skip((parseInt(page as string) - 1) * parseInt(limit as string));
    const replies = (await repliesCursor.toArray()).map((reply) => {
      return {
        id: reply._id,
        reply: reply.reply,
        owner: reply.owner,
        quote: reply.quote,
        createdAt: reply.createdAt,
      };
    });

    res.send({
      replies,
      count: numOfReplies,
    });
  }

  async function createReply(req: Request, res: Response) {
    const { post_id, thread_id, reply, owner_id, quote } = req.body;
    if (post_id && thread_id && owner_id) {
      const owner: any = await db
        .collection('user')
        .findOne({ _id: new ObjectId(owner_id) });
      if (owner) {
        const resultsAfterInsert = await replyCollection.insertOne({
          post_id,
          thread_id,
          reply,
          owner: {
            id: owner._id,
            name: owner.name,
            avatar_url: owner.avatar_url,
          },
          quote,
          createdAt: new Date(),
        });

        // Update comments count on the post
        await db
          .collection('post')
          .updateOne({ _id: new ObjectId(post_id) }, { $inc: { 'interactions.comments': 1 } });
        // Update replies count on the thread
        await threadCollection.updateOne(
          { _id: new ObjectId(thread_id) },
          { $inc: { replies: 1 } }
        );
        res.send(JSON.stringify(resultsAfterInsert));
      } else {
        res.status(400).send('Cannot find the author, owner_id is not valid');
      }
    } else {
      res.status(400).send('Missing required fields');
    }
  }

  async function removeReplies(req: Request, res: Response) {
    await replyCollection.deleteMany({});
    res.sendStatus(200);
  }
}

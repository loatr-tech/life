import { Express, Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { Db, FindOptions, ObjectId } from 'mongodb';
import { authenticateToken } from './middleware';

export default async function userApi(app: Express, db: Db) {
  /**
   * Endpoints
   */
  app.get('/life/user', authenticateToken, getUser);
  app.patch('/life/user', authenticateToken, updateUser);

  const userCollection = db.collection('user');

  async function getUser(req: Request, res: Response) {
    const userId = req.user.id;
    const userObject: any = await userCollection.findOne(
      { _id: new ObjectId(userId) },
      {
        projection: { password: 0 },
      } as FindOptions
    );
    if (userObject) {
      const formattedUserObject = {
        id: userObject._id,
        name: userObject.name,
        username: userObject.username,
        email: userObject.email,
        googleId: userObject.googleId,
        avatar_url: userObject.avatar_url,
        createdAt: userObject.createdAt,
      };
      res.status(200).send(formattedUserObject);
    } else {
      res.status(404).send('User not found');
    }
  }

  async function updateUser(req: Request, res: Response) {
    const userId = req.user.id;
    const { name, avatar_url, password } = req.body;

    if (name || avatar_url || password) {
      const modifiedFields: any = {};
      if (name) modifiedFields.name = name;
      if (avatar_url) modifiedFields.avatar_url = avatar_url;
      if (password) modifiedFields.password = await bcrypt.hash(password, 10);

      await userCollection.updateOne(
        { _id: new ObjectId(userId) },
        { $set: modifiedFields }
      );
      res.status(200).send();
    } else {
      res.status(400).send('Missing required fields');
    }
  }
}

import { Express, Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Db, FindOptions } from 'mongodb';

export default async function authApi(app: Express, db: Db) {
  /**
   * Endpoints
   */
  app.post('/life/third-party-login', thirdPartyLogin);
  app.post('/life/login', regularLogin);
  app.post('/life/signup', regularSignup);

  const userCollection = db.collection('user');

  async function _getUserObj(filter = {}, userObject?: any) {
    if (!userObject) {
      userObject = await userCollection.findOne(filter, {
        projection: { password: 0 },
      } as FindOptions);
    }
    return {
      id: userObject._id,
      name: userObject.name,
      username: userObject.username,
      email: userObject.email,
      googleId: userObject.googleId,
      avatar_url: userObject.avatar_url,
      createdAt: userObject.createdAt,
    };
  }

  function _getToken(userObject: any) {
    return jwt.sign(
      {
        id: userObject._id,
        email: userObject.email,
      },
      process.env.ACCESS_TOKEN_SECRET as string
    );
  }

  /**
   * Endpoint to let user login with 3rd party integration
   */
  async function thirdPartyLogin(req: Request, res: Response) {
    const { method, googleId, user } = req.body;
    if (method === 'google' && googleId && user) {
      const existingUser: any = await userCollection.findOne({ googleId });
      if (existingUser) {
        res.cookie('SA_TOKEN', _getToken(existingUser), { httpOnly: true });
        res.status(200).send(await _getUserObj({}, existingUser));
      } else {
        const { insertedId } = await userCollection.insertOne({
          googleId,
          name: user.name,
          email: user.email,
          avatar_url: user.imageUrl,
          createdAt: new Date(),
        });
        const userObject: any = await _getUserObj({ _id: insertedId });
        res.cookie('SA_TOKEN', _getToken(userObject), { httpOnly: true });
        res.status(201).send(userObject);
      }
    } else {
      res.status(400).send('Missing required fields');
    }
  }

  async function regularLogin(req: Request, res: Response) {
    const { username, password } = req.body;
    if (username && password) {
      const existingUser: any = await userCollection.findOne({ $or: [
        { username },
        { email: username }
      ]});
      if (existingUser) {
        if (await bcrypt.compare(password, existingUser.password)) {
          res.cookie('SA_TOKEN', _getToken(existingUser), {
            httpOnly: true,
          });
          res.cookie('SA_TOKEN', _getToken(existingUser), { httpOnly: true });
          res.send(await _getUserObj({}, existingUser));
        } else {
          res.status(401).send('用户名或者密码错误');
        }
      } else {
        res.status(404).send('该用户不存在');
      }
    } else {
      res.status(400).send('Missing required fields');
    }
  }

  /**
   * Endpoint to let user signup with: username, email and password
   */
  async function regularSignup(req: Request, res: Response) {
    try {
      const { username, email, password } = req.body;
      // Create hashed password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Find existing user base on given email
      const existingUser: any = await userCollection.findOne({ email });

      if (existingUser) {
        // Have existing user registed use given email
        if (existingUser.username) {
          // Current user already registered
          res.status(409).send('该邮箱已被注册');
        } else {
          // TODO: email verification here
          // Update the user data with given username and password
          await userCollection.updateOne(
            { email },
            {
              $set: {
                username,
                password: hashedPassword,
              },
            }
          );
          // Return
          res.cookie('SA_TOKEN', _getToken(existingUser), { httpOnly: true });
          res.status(200).send(await _getUserObj({ _id: existingUser._id }));
        }
      } else {
        if (await userCollection.findOne({ username })) {
          // Current username already used
          res.status(409).send('该用户名已被注册');
        } else {
          // Create a new user
          const { insertedId } = await userCollection.insertOne({
            username,
            name: username,
            email,
            password: hashedPassword,
            avatar_url: null,
            createdAt: new Date(),
          });

          // Return
          const userObject = await _getUserObj({ _id: insertedId });
          res.cookie('SA_TOKEN', _getToken(userObject), {
            httpOnly: true,
          });
          res.status(201).send(userObject);
        }
      }
    } catch (err) {
      res.sendStatus(500);
    }
  }
}

import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export default function optionalToken(req: Request, res: Response, next: NextFunction) {
  const token = req.cookies['SA_TOKEN'];
  if (token == null) {
    next();
  } else {
    jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET as string,
      (err: any, user: any) => {
        if (!err) {
          req.user = user;
        }
        next();
      }
    );
  }
}

import { Request, Response } from 'express';

export const getHome = (req: Request, res: Response) => {
  res.status(200).send('Hello, World!');
};

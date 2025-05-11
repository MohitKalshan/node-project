import { Request, Response } from 'express';

export const getHome = (req: Request, res: Response) => {
  res.status(200).send({
    code: 200,
    status: 'success',
    message: 'Hello, World!',
    data: {
      message: 'Hello, World!',
    },
  });
};

export default {
  getHome,
};

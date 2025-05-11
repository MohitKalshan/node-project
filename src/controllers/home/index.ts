import { Request, Response } from 'express';

const getHome = (req: Request, res: Response) => {
  res.status(200).send({
    code: 200,
    status: 'success',
    message: 'data fetched successfully',
    data: {
      message: 'Hello, World!',
    },
  });
};

export default {
  getHome,
};

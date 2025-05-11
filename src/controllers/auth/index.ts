import { Request, Response } from 'express';

const login = (req: Request, res: Response) => {
  res
    .status(200)
    .json({
      code: 200,
      status: 'success',
      message: 'Login successful',
      data: {
        token: '1234567890',
      },
    });
};

export default {
  login,
};

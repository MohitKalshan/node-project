import { Request, Response } from 'express';

export const login = (req: Request, res: Response) => {
  res.status(200).json({ status: true, message: 'Login successful' });
};

export default {
  login,
};

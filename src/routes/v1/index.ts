import { Router } from 'express';

import authRoute from './auth/authRoute';
import homeRoute from './home/homeRoute';

const router = Router();

router.use('/home', homeRoute);
router.use('/auth', authRoute);

export default router;

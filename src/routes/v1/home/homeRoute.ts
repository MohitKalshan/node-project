import { Router } from 'express';

import homeController from '../../../controllers/home';

const router = Router();

router.get('/get-home', homeController.getHome);

export default router;

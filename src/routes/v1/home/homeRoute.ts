import { Router } from 'express';

import { getHome } from '../../../controllers/home';

const router = Router();

router.get('/get-home', getHome);

export default router;

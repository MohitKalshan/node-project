import express from 'express';
import { NextFunction, Request, Response } from 'express';

import config from './config/config';
import routes from './routes/v1/index';

const app = express();
const PORT = config.port;

app.use('/api/v1', routes);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).send('Not Found');
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).send('Internal Server Error');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

export default app;

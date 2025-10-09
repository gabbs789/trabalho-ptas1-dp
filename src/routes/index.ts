import { Router } from 'express';
import moviesRouter from './movies.routes';

const router = Router();

router.use('/movies', moviesRouter);

export { router };

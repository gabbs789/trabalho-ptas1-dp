import { Router } from 'express';
import moviesRouter from './movies.routes';
import usersRouter from './users.routes';

const router = Router();


router.use('/pets', moviesRouter);
router.use('/movies', moviesRouter);
router.use('/users', usersRouter);

export { router };

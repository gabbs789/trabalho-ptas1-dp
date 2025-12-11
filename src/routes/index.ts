import { Router } from 'express';
<<<<<<< HEAD
import petsRouter from './pets.routes';

const router = Router();

router.use('/pets', petsRouter);
=======
import moviesRouter from './movies.routes';
import usersRouter from './users.routes';

const router = Router();


router.use('/pets', moviesRouter);
router.use('/movies', moviesRouter);
router.use('/users', usersRouter);
>>>>>>> 2fbe4ab7c3d6eab99de98eea0debb00dc536a3bd

export { router };

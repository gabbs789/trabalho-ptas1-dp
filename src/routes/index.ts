import { Router } from 'express';
import moviesRouter from './movies.routes';

const router = Router();

// Expose petshop routes; keep movies for backward compatibility during migration
router.use('/pets', moviesRouter);
router.use('/movies', moviesRouter);

export { router };

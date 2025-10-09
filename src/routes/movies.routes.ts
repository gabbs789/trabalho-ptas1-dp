import { Router } from 'express';
import * as MoviesController from '../controllers/movies.controller';

const router = Router();

router.get('/', MoviesController.list);
router.get('/:id', MoviesController.getById);
router.post('/', MoviesController.create);
router.put('/:id', MoviesController.update);
router.delete('/:id', MoviesController.remove);

export default router;

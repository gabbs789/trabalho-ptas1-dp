import { Router } from 'express';
import * as PetsController from '../controllers/pets.controller';

const router = Router();

router.get('/', PetsController.list);
router.get('/:id', PetsController.getById);
router.post('/', PetsController.create);
router.put('/:id', PetsController.update);
router.delete('/:id', PetsController.remove);

export default router;

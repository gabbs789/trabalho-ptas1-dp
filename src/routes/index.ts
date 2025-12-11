import { Router } from 'express';
import petsRouter from './pets.routes';

const router = Router();

router.use('/pets', petsRouter);

export { router };

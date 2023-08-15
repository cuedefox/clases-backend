import { Router } from 'express';

import coursesRouter from './courses.router.js';
import studentsRouter from './students.router.js';

const router = Router();

router.use('/courses', coursesRouter);
router.use('/students', studentsRouter);

export default router;
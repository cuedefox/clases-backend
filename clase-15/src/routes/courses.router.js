import { Router } from 'express';

// Si queremos cambiar de persistencia - solo descomentar/comentar
// import CourseService from '../services/filesystem/courses.service.js';
import CourseService from '../services/db/courses.service.js';

const router = Router();
const coursesService = new CourseService();


// Completar Router
router.get('/', async (req, res) => {
    try {
        let courses = await coursesService.getAll();
        res.send({payload: courses});
    } catch (error) {
        console.log(error);
    }
})

router.post('/', async (req, res) => {
    let course = req.body;
    try {
        await coursesService.save(course);
        res.send({status: 'ok'});
    } catch (error) {
        console.log(error)
    }
})

export default router;
import {MODEL_COURSES} from "./models/courses.js";

export default class CoursesService {
    constructor() {
        console.log("Working courses with Database persistence in mongodb");
    }

    getAll = async () => {
        let courses = await MODEL_COURSES.find();
        return courses.map(course => course.toObject());
    }

    save = async (course) => {
       try {
            let result = await MODEL_COURSES.create(course);
            return result;
       } catch (error) {
            console.log(error)
       }
    }
}

import {MODEL_STUDENTS} from "./models/students.js"

export default class StudentsService {
    constructor() {
        console.log("Working students with Database persistence in mongodb");
    }

    getAll = async () => {
        let students = await MODEL_STUDENTS.find();
        return students.map(student => student.toObject());
    }
    
    save = async (student) => {
       try {
            let result = await MODEL_STUDENTS.create(student);
            return result;
       } catch (error) {
            console.log(error)
       }
    }
}

//TODO: Implementar las operaciones CRUD:
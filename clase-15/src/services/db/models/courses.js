//TODO: Completar Modelo con Mongoose:

import mongoose from "mongoose";


const collectionName = 'courses';

const stringTypeSchemaUniqueRequired = {
    type: String,
    unique: true,
    required: true
};

const courseSchema = new mongoose.Schema({
    title: String,
    description: String,
    teacherName: Number,
    students: Array,
    id: stringTypeSchemaUniqueRequired
});


export const MODEL_COURSES = mongoose.model(collectionName, courseSchema);

// exportar
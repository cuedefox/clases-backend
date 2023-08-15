import mongoose from "mongoose";

const collectionName = 'students';

const studentsSchema = new mongoose.Schema({
    name: String,
    lastName: String,
    age: Number,
    courses: Array
});


export const MODEL_STUDENTS = mongoose.model(collectionName, studentsSchema);

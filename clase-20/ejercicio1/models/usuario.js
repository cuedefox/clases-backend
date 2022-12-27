import mongoose from "mongoose";

const usuariosColl = 'usuarios';
const usuariosSchema = mongoose.Schema({
    nombre: String,
    apellido: String,
    dni: String
})

export const usuarios = mongoose.model(usuariosColl, usuariosSchema);
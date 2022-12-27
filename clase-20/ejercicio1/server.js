import mongoose from "mongoose";
import * as model from './models/usuario.js';

try {
    const URL = 'mongodb+srv://cuede:timecrisis1@miprimercluster.rkresxt.mongodb.net/ecommerce?retryWrites=true&w=majority';
    await mongoose.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    
    const usuarios = await model.usuarios.find();

    console.log(usuarios);

    const newUsuario = new model.usuarios({
        nombre: 'Federico',
        apellido: 'Perez',
        dni: '123456789'
    })
    await newUsuario.save()
    
 } catch (error) {
    console.log('error: ' + error);
 } finally {
    mongoose.disconnect();
 }
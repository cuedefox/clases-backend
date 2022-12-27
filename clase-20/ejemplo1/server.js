import mongoose from "mongoose";

 try {
    const URL = 'mongodb+srv://cuede:timecrisis1@miprimercluster.rkresxt.mongodb.net/?retryWrites=true&w=majority';
    await mongoose.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('conectado correctamente');
    })
 } catch (error) {
    console.log('error: ' + error);
 }
import express from 'express';
import config from './config/config.js';
import MongoSingleton from './config/mongodb-singleton.js';
import cors from 'cors';


//import Routers
import usersRouter from './routers/users.router.js';
import businessRouter from './routers/business.router.js';
import ordersRouter from './routers/orders.router.js';


const app = express();

//JSON settings:
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Habilitamos politicas de CORS
app.use(cors());


//Declare routers:
app.use("/api/users", usersRouter);
app.use("/api/business", businessRouter);
app.use("/api/orders", ordersRouter);


const SERVER_PORT = config.port;
app.listen(SERVER_PORT, () => {
    console.log("Servidor escuchando por el puerto: " + SERVER_PORT);
});

// Conxion coin MOngo 
const mongoInstance = async () => {
    try {
        await MongoSingleton.getInstance();
    } catch (error) {
        console.error(error);
    }
};
mongoInstance()

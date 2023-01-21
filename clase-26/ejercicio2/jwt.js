import jwt from "jsonwebtoken";

const PRIVATE_KEY = 'aserejesecreto';

export function generateAuthToken(nombre) {
    return jwt.sign({nombre: nombre}, PRIVATE_KEY, {expiresIn: '60s'});
};

export function auth(req, res, next) {
    const authHeader = req.headers['authorization'] || req.headers['Authorization'];
    if(!authHeader) {
        return res.status(401).json({
            error: 'no autorizado',
            detalle: 'no puedes pasar'
        });
    };
    const token = authHeader.split(" ")[1];
    if(!token) {
        return res.status(401).json({
            error: 'no autorizado',
            detalle: 'no puedes pasar'
        }); 
    };
    try {
        req.user = jwt.verify(token, PRIVATE_KEY);
    } catch (error) {
        return res.status(401).json({
            error: 'no autorizado',
            detalle: 'no puedes pasar'
        }); 
    };
    next();
};
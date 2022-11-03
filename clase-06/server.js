const http = require('http');

const server = http.createServer((mensaje, respuesta) => {
    respuesta.end("Me parece demasiado correcto");
})

const conection = server.listen(8080, () => {
    console.log("servidor en 8080");
})
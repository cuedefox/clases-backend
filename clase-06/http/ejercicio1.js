const http = require('http');

const PORT = 8080;

const server = http.createServer((request, response) => {
    response.end('mi primer hola mundo desde el server con modulo nativo http');
});

server.listen(PORT, () => {
    console.log(`Server runing on port ${PORT}`);
});
const http = require('http');

const PORT = 8080;

const server = http.createServer((request, response) => {
    const mensaje = mensajeHora();
    response.end(mensaje);
});

function mensajeHora() {
    const hora = new Date().getHours();

    if (hora >= 6 && hora <= 12) {
        return 'Buen dia';
    } else if (hora >= 13 && hora <= 19) {
        return 'Buenas tardes';
    }
    return 'buenas noches';
}

const conection = server.listen(PORT, () => {
    console.log("servidor en 8080");
})
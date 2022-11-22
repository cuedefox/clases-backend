const socket = io();

const input = document.querySelector('input');

document.querySelector('button').addEventListener('click', () => {
    socket.emit('mimensaje', input.value);
})

socket.on('mensajes', data => {
    const htmlMsjs = data
        .map(msj => `id = ${msj.socketid} ---> ${msj.mensaje}`)
        .join('<br>')

    document.querySelector('p').innerHTML = htmlMsjs;
})
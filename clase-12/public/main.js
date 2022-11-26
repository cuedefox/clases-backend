const socket = io();

socket.on('messages', data => {
    const html = data.map(msj => {
        return `<div>
        <em>${msj.date}</em>
        <strong>${msj.author}:</strong>
        <em>${msj.text}</em>
        </div>`
    })
    .join(" ");

    document.getElementById('messages').innerHTML = html;
});

function addMessage() {
    const message = {
        author: document.getElementById('username').value,
        text: document.getElementById('text').value,
        date: new Date().toLocaleString()

    }

    socket.emit('new-message', message);
    return;
}
const socket = io();
let user;
const chatBox = document.getElementById("chatBox");
const messageLogs = document.getElementById("messageLogs");

Swal.fire({
    icon: 'info',
    title: 'identificate, porfavor',
    input: 'text',
    text: 'ingrese username para identificarse en el chat',
    inputValidator: (input) => {
        if(!input) {
            return "Necesita escribir su nombre"
        }
    },
    allowOutsideClick: false
}).then(result => {
    user = result.value;
    const myName = document.getElementById("myName");
    myName.innerHTML = user;
    socket.emit('userConnected', {user: user});
})

chatBox.addEventListener('keyup', evt => {
    if(evt.key === 'Enter') {
        if(chatBox.value.trim().length > 0) {
            socket.emit('message', {user: user, message: chatBox.value});
            chatBox.value = '';
        }
    }
})

socket.on('messageLogs', data => {
    let logs = '';
    data.forEach(log => {
        logs += `${log.user} dice: ${log.message}<br/>`;
    });
    messageLogs.innerHTML = logs;
})

socket.on('userConnected', data => {
    let message = `Nuevo usuario conectado: ${data.user}`;
    Swal.fire({
        icon: 'info',
        title: 'Nuevo usuario en el chat',
        text: message,
        toast: true
    })
})

const closeChatbox = document.getElementById('closeChatbox');
closeChatbox.addEventListener('click', evt => {
    socket.emit('closeChat', {close: 'close'});
    messageLogs.innerHTML = '';
})
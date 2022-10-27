const fin = () => console.log('terminé');
function mostrarLetras(str, cb) {
    let i = 0;
    const timer = setInterval(() => {
        if(i < str.length) {
            console.log(str[i]);
            i++;
        }else {
            clearInterval(timer);
            cb();
        }
    }, 1000);
}

setTimeout(() => {mostrarLetras("coder", fin), 1000});
setTimeout(() => {mostrarLetras("coder", fin), 900});
setTimeout(() => {mostrarLetras("coder", fin), 1200});


const fs = require('fs');

try {
    fs.writeFileSync('./fyh.txt', new Date().toLocaleString());
} catch (err) {
    throw new Error('Error en la escritura del archivo: ' + err);
}

try {
    const fechayhora = fs.readFileSync('./fyh.txt', 'utf-8');
    console.log(fechayhora);
} catch (err) {
    throw new Error('Error en la lectura del archivo:' + err);
}

fs.readFile('./package.json', 'utf-8', (err, data) => {
    if(err) {
        throw new Error(`error: ${err}`);
    }
    console.log("la lectura fue exitosa");
    const info = {
        contenidoStr: data,
        contenidoObj: JSON.parse(data),
        size: data.length
    }
    console.log(info);
    fs.writeFile('./info.txt', JSON.stringify(info, null, 2), err => {
        if(err) {
            throw new Error(`error: ${err}`);
        }
        console.log("la escritura fue exitosa");
    });
});
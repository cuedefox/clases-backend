const fs = require('fs');

const dirName = './files';
const fileName = dirName + '/ejemplo.txt';

if(!fs.existsSync(fileName)) fs.mkdirSync(dirName);
fs.writeFileSync(fileName, 'Hola coders estoy en el archivo');

if(fs.existsSync(fileName)) {
    let content = fs.readFileSync(fileName, 'utf-8');
    console.log(content);
    fs.appendFileSync(fileName, ' Rodrigo es el mejor programador de la historia');
    content = fs.readFileSync(fileName, 'utf-8');
    console.log('data actualizada');
    console.log(content);
    console.log('borrando archivo...');
    fs.unlinkSync(fileName);
    fs.existsSync(fileName) ? console.log('error: no se borro') : console.log('archivo eliminado!');
} else {
    console.log('Error creando el archivo');
}
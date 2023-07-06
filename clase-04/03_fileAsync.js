const fs = require('fs');

const dirName = './files2';
const fileName = dirName + '/ejemploCall.txt';

let data = 'Data de archivo usando callbacks';

fs.mkdir(dirName, {recursive: true}, (error) => {
    if(error) throw Error('No se pudo crear el directorio');
    fs.writeFile(fileName, data, (error) => {
        if(error) throw Error('No se pudo escribir archivo');
    });
    fs.readFile(fileName, 'utf-8', (error, contenido) => {
        if(error) throw Error('No se pudo leer archivo');
        console.log('Contenido:', contenido);
        fs.appendFile(fileName, 'Otro ejemplo', (error) => {
            if(error) throw Error('No se pudo agregar archivo');
            fs.readFile(fileName, 'utf-8', (error, contenido) => {
                if(error) throw Error('No se pudo leer archivo');
                console.log('Contenido:', contenido);
                fs.unlink(fileName, (error) => {
                    if(error) throw Error("no se pudo eliminar el archivo");
                });
            });
        });
    });
});
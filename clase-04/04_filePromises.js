const fs = require('fs');

const dirName = './files3';
const fileName = dirName + '/ejemploPromise.txt';

const fsPromises = async (data) => {
    await fs.promises.mkdir(dirName, {recursive: true});

    await fs.promises.writeFile(fileName, data);

    let resultado = await fs.promises.readFile(fileName, 'utf-8');
    console.log('leyendo archivo...');
    console.log(resultado);
}

fsPromises('Tigre Campeon');


const info = {
    contenidoStr: "",
    contenidoObj: "",
    size: 0
}

const fileNameJSON = './package.json';
const fileInfoJSON = './info.json';

const fsConPromesasJSON = async () => {
    if(!fs.existsSync(fileNameJSON)) {
        console.error('Archivo no existe ejecutar npm init -y');
        throw Error("el arcchivo no se puede leer porque no existe", fileNameJSON);
    }
    let jsonString = await fs.promises.readFile(fileNameJSON, 'utf-8');
    console.info('archivo JSON obtenido desde archivo:');
    console.log(jsonString);

    info.contenidoStr = jsonString;
    info.contenidoObj = JSON.parse(jsonString);
    console.log('objeto info transformado desde archivo:', fileNameJSON);
    console.log(info);

    await fs.promises.writeFile(fileInfoJSON, JSON.stringify(info, null, 2, '/t'));

    let resultado = await fs.promises.readFile(fileInfoJSON, 'utf-8');
    console.log('Archivo leido resultado:');
    console.log(resultado);
}

fsConPromesasJSON();
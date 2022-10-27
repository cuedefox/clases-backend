const fs = require('fs');

fs.promises.readFile('./info.txt', 'utf-8')
    .then(data => {
        const info = JSON.parse(data);
        console.log(info);

        const pkgObj = info.contenidoObj;
        pkgObj.author = 'Rodorigo';

        fs.promises.writeFile('./package-rodo.json', JSON.stringify(info.contenidoObj, null, 2))
            .then(
                console.log("piola")
            )
            .catch(err => {console.log(err)})
    })
    .catch(err => console.log(err))
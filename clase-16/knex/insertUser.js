const { options } = require('./options/mysqlconn.js');
const knex = require('knex')(options);

const usuarios = [
    {nombre: 'Rodrigo', apellido: 'Vergara', edad: 21, email: 'rodrigovergara2001@gmail.com'},
    {nombre: 'Gapache', apellido: 'Mugre', edad: 6, email: 'gapachoso@gmail.com'},
    {nombre: 'chotache', apellido: 'Aliodas', edad: 2, email: 'kike@gmail.com'}
]

knex('usuario').insert(usuarios)
    .then(() => console.log('se ingresaron correctamente'))
    .catch(err => console.log(err))
    .finally(() => {
        knex.destroy()
    })
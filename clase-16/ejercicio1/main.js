import { options } from "./options/mysqlconn.js";
import ClientSQL from "./sqlContainer.js";

const sql = new ClientSQL(options);

sql.crearTabla()
    .then(() => {
        console.log("1- tabla creada")
        const articulos = [
            {nombre: "Leche", codigo: "AB-12", precio: 50.56, stock: 30},
            {nombre: "Harina", codigo: "AC-32", precio: 100.96, stock: 10},
            {nombre: "Dulce de leche", codigo: "GH-43", precio: 24.76, stock: 24},
            {nombre: "Manteca", codigo: "LP-78", precio: 82.41, stock: 3},
            {nombre: "Coca", codigo: "VC-89", precio: 400.52, stock: 12}
        ]
        return sql.insertarArticulos(articulos)
    })
    .then(() => {
        console.log("2- articulos insertados")

        return sql.listarArticulos()
    })
    .then(arts => {
        console.log(arts)
        console.log("3- articulos listados")
        return sql.borrarArticulos(3)
    })
    .then(() => {
        console.log("4- articulo 3 borrado")
        return sql.actualizarStock(0, 2)
    })
    .then(() => {
        console.log("5- stock de articulo 2 actualizado")
        return sql.listarArticulos()
    })
    .then(arts => {
        console.log(arts)
        console.log('fin')
    })
    .catch(err => {
        console.log(`Error ${err}`)
    })
    .finally(() => {
        sql.close()
    })
import express from 'express'

const app = express()

const PORT = parseInt(process.argv[2]) || 8080

app.get('/datos', (req, res) => {
    console.log('Hola');
    res.send(`Servidor express en ${PORT} - <b> PID: ${process.pid}</b> - ${new Date().toLocaleString()}`)
})

process.on('unhandledRejection', error => {
    // Will print "unhandledRejection err is not defined"
    console.log('unhandledRejection', error.message);
  });

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
})
// fork
// pm2 start server.js --name serverModoFork --watch -- 8081

// cluster (se agrega el -i)
// pm2 start server.js --name serverModoCluster -i max --watch -- 8082
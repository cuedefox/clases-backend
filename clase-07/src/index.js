import express from 'express';

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let users = [];

app.get('/usersAll', (req, res) => {
    res.send(users);
})

app.post('/api/users', (req, res) => {
    let user = req.body;

    user.id = users.length > 0 ? users[users.length - 1].id + 1 : 1;

    if (!user.first_name || !user.last_name) {
        return res.status(400).send({ status: "error", msg: "valores incompletos, revisar datos de entrada!!" });
    }
    users.push(user);
    res.send({ status: "success", msg: 'Usuario Creado!' });
})

app.put('/api/users/:userId', (req, res) => {
    let userId = parseInt(req.params.userId)
    let userUpdated = req.body;


    const userPosition = users.findIndex((u => u.id === userId));

    if (userPosition < 0) {
        return response.status(202).send({ status: "info", error: "Usuario no encontrado" });
    }

    users[userPosition] = userUpdated

    res.send({ status: "Success", message: "Usuario Actualizado.", data: users[userPosition] }); //Si no se indica retorna status HTTP 200OK.
})

app.delete('/api/users/:userId', (req, res) => {
    let userId = parseInt(req.params.userId);

    const usersSize = users.length;

    const userPosition = users.findIndex((u => u.id === userId));
    if (userPosition < 0) {
        return response.status(202).send({ status: "info", error: "Usuario no encontrado" });
    }

    users.splice(userPosition, 1);
    if (users.length === usersSize) {
        return response.status(500).send({ status: "error", error: "Usuario no se pudo borrar." });
    }


    res.send({ status: "Success", message: "Usuario Eliminado." });

})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})
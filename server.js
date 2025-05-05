const express = require("express");
const sequelize = require('./config/dbConfig');
const Usuario = require('./models/Usuario');
const AuthRoutes = require('./Routes/AuthRoutes');
const UsuariosRoutes = require("./Routes/UsuariosRoutes");

const app = express();

sequelize.sync().then(
    () => {
        console.log('Banco de dados conectado!!!')
    }
);

const port = 3000

app.get("/", (req, res) => {
    res.send("Rota principal")
});

UsuariosRoutes.routes(app);
AuthRoutes.routes(app);

app.listen(port, () => {
    console.log(`Servidor Rodando na porta ${port}`)
});
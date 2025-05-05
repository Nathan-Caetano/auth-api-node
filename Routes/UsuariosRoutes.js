const express = require("express");
const UsuariosController = require("../controllers/UsuariosController");
const Usuario = require("../models/Usuario");

const routes = (app) => {
    app.use(express.json())

    app.get('/usuarios', UsuariosController.listarUsuarios);

    app.get('/usuarios/:id', UsuariosController.selecUsuario);

    app.post('/usuarios', UsuariosController.criarUsuario)

    app.delete('/usuarios/:id', UsuariosController.deletarUsuario)
}

module.exports = {
    routes
}
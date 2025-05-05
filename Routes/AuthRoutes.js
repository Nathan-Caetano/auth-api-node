const express = require('express')
const authController = require('../controllers/authController')

const routes = (app) => {
    app.use(express.json())

    app.get('/login/:email/:senha', authController.logar)
}

module.exports = {
    routes
}
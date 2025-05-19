const express = require('express')
const authController = require('../controllers/authController')

const routes = (app) => {
    app.use(express.json())

    app.post('/login', authController.logar)
}

module.exports = {
    routes
}
const express = require('express');
const UsuarioController = require('./controllers/UsuarioController');
const routes = express.Router();


//usuario

routes.post("/usuario", UsuarioController.create)

module.exports = routes;
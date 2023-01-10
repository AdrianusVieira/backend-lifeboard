const express = require("express");
const UsuarioController = require("./controllers/UsuarioController");
const routes = express.Router();

//usuario

routes.post("/usuario", UsuarioController.create);
routes.get("/usuario/:email", UsuarioController.getByEmai);
routes.put("/usuario/:email",UsuarioController.updateByEmail)

module.exports = routes;

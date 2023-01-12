const express = require("express");
const CarteiraController = require("./controllers/CarteiraController");
const FundoController = require("./controllers/FundoController");
const UsuarioController = require("./controllers/UsuarioController");
const routes = express.Router();

//usuario
routes.post("/usuario", UsuarioController.create);
routes.get("/usuario/:email", UsuarioController.getByEmai);
routes.put("/usuario/:email", UsuarioController.updateByEmail);
routes.delete("/usuario/:email", UsuarioController.deleteByEmail);

//carteira
routes.post("/carteira", CarteiraController.create);

//fundo
routes.post("/fundo", FundoController.create);

module.exports = routes;

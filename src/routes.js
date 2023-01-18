const express = require("express");
const CarteiraController = require("./controllers/CarteiraController");
const FundoController = require("./controllers/FundoController");
const MovimentacaoController = require("./controllers/MovimentacaoController");
const UsuarioController = require("./controllers/UsuarioController");
const routes = express.Router();

//usuario
routes.post("/usuario", UsuarioController.create);
routes.get("/usuario/:email", UsuarioController.getByEmai);
routes.put("/usuario/:email", UsuarioController.updateByEmail);
routes.delete("/usuario/:email", UsuarioController.deleteByEmail);

//carteira
routes.post("/carteira", CarteiraController.create);
routes.get("/carteira/:id", CarteiraController.getByUsuario);

//fundo
routes.post("/fundo", FundoController.create);
routes.get("/fundo/:id", FundoController.getByUsuario);

//movimentacao
routes.post("/movimentacao", MovimentacaoController.create);

module.exports = routes;

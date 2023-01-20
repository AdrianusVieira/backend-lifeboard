const express = require("express");
const CarteiraController = require("./controllers/CarteiraController");
const FundoController = require("./controllers/FundoController");
const MovimentacaoController = require("./controllers/MovimentacaoController");
const UsuarioController = require("./controllers/UsuarioController");
const InvestimentoController = require("./controllers/InvestimentoController");
const routes = express.Router();

//usuario
routes.post("/usuario", UsuarioController.create);
routes.get("/usuario/:email", UsuarioController.getByEmai);
routes.put("/usuario/:email", UsuarioController.updateByEmail);
routes.delete("/usuario/:email", UsuarioController.deleteByEmail);

//carteira
routes.post("/carteira", CarteiraController.create);
routes.get("/carteira/:id", CarteiraController.getByUsuario);
routes.put("/carteira/:id", CarteiraController.updateById);
routes.delete("/carteira/:id", CarteiraController.deleteById);

//fundo
routes.post("/fundo", FundoController.create);
routes.get("/fundo/:id", FundoController.getByUsuario);
routes.put("/fundo/:id", FundoController.updateById);
routes.delete("/fundo/:id", FundoController.deleteById);

//movimentacao
routes.post("/movimentacao", MovimentacaoController.create);
routes.get(
  "/movimentacaocarteira/:id_carteira",
  MovimentacaoController.getByCarteira
);
routes.get("/movimentacaofundo/:id_fundo", MovimentacaoController.getByFundo);
routes.get(
  "/movimentacaoinvestimento/:id_investimento",
  MovimentacaoController.getByInvestimento
);

//investimento
routes.post("/investimento", InvestimentoController.create);
routes.get("/investimento/:categoria", InvestimentoController.getByCategoria);
routes.put("/investimento/:id", InvestimentoController.updateById);
routes.delete("/investimento/:id", InvestimentoController.deleteById);

module.exports = routes;

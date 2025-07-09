

module.exports = app => {
  const Usuari = require("../controllers/user.controllers.js");
  const Lixo = require("../controllers/lixeira.controllers.js");
  const Cidade = require("../controllers/cidade.controllers.js");

  var router = require("express").Router();

  // rotas usuario

  router.post("/api/user", Usuari.create); // body tem de conter tudo do usuario (rota de criação)

  router.get("/api/user", Usuari.findAll); // body pode ser vazio (rota de pesquisa)

  router.get("/api/user/2", Usuari.findOne); // body tem de conter email e senha (rota de altenticação)



  // rotas lixeiras

  router.get("/api/lixeira", Lixo.findAll); // body vazio (rota de pesquisa)

  router.put("/api/lixeira/:id", Lixo.update);

  // APARTIR DAQUI NÃO FOI TESTADO // CODIGO NÃO TESTADO // CODIGO NÃO TESTADO // CODIGO NÃO TESTADO // CODIGO NÃO TESTADO // CODIGO NÃO TESTADO
  // APARTIR DAQUI NÃO FOI TESTADO // CODIGO NÃO TESTADO // CODIGO NÃO TESTADO // CODIGO NÃO TESTADO // CODIGO NÃO TESTADO // CODIGO NÃO TESTADO
  // APARTIR DAQUI NÃO FOI TESTADO // CODIGO NÃO TESTADO // CODIGO NÃO TESTADO // CODIGO NÃO TESTADO // CODIGO NÃO TESTADO // CODIGO NÃO TESTADO

  //quem quiser testar e ageitar eu agradeço

  router.put("/api/user/:id", Usuari.update);

  router.delete("/api/user/:id", Usuari.delete);

  router.delete("/api/user", Usuari.deleteAll);

  app.use("/", router);
};




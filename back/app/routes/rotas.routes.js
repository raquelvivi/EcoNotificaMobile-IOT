

module.exports = app => {
    
    const Usuari = require("../controllers/user.controllers.js");

    var router = require("express").Router();

    router.post("/api/user", Usuari.create);

    router.get("/api/user", Usuari.findAll);


    router.get("/api/user/2", Usuari.findOne);
  
    router.put("/api/user/:id", Usuari.update);

    router.delete("/api/user/:id", Usuari.delete);

    router.delete("/api/user", Usuari.deleteAll);

    app.use('/', router);


};




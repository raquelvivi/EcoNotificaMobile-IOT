

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



//PRECISEI CONFIGURAR LOCALMENTE PARA TESTAR OS CADASTROS


//const pool = require("../config/db.js"); 

// module.exports = (app) => {
//   app.get("/pessoas", async (req, res) => {
//     try {
//       const result = await pool.query("SELECT * FROM pessoa");
//       res.json(result.rows);
//     } catch (err) {
//       res.status(500).json({ erro: err.message });
//     }
//   });
// }
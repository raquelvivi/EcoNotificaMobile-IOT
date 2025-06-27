module.exports = app => {
    const Fixass = require("../controllers/fixas.controllers.js");

    var router = require("express").Router();
    // Create a new Aluno
    router.post("/api/fixa", Fixass.create);
    // Retrieve all Fixass
    router.get("/api/fixa", Fixass.findAll);

    // Retrieve a single Aluno with id
    router.get("/api/fixa/:id", Fixass.findOne);
    // Update a Aluno with id
    router.put("/api/fixa/:id", Fixass.update);
    // Delete a Aluno with id
    router.delete("/api/fixa/:id", Fixass.delete);
    // Delete all Fixass
    router.delete("/api/fixa", Fixass.deleteAll);

    app.use('/', router);


};

const pool = require("../config/db.js"); 
module.exports = (app) => {
  app.get("/pessoas", async (req, res) => {
    try {
      const result = await pool.query("SELECT * FROM pessoa");
      res.json(result.rows);
    } catch (err) {
      res.status(500).json({ erro: err.message });
    }
  });
}
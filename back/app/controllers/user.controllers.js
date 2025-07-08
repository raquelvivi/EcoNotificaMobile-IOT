
const User = require("../models/user.model.js");



// Criar usuario
exports.create = (req, res) => {

  if (!req.body) {
    res.status(400).send({
      message: "body vaziu",
    });
  }

  const UserBody = new User({
    nome: req.body.nome || null,
    email: req.body.email || null,
    senha: req.body.senha || null,
    tipo: req.body.tipo || null,
    bairro: req.body.bairro || null,
    cidade: req.body.cidade || null,
  });

  User.create(UserBody, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Erro ao criar User (controllers)",
      });
    else res.send(data);
  });
};


// Puxa todos os dados
exports.findAll = (req, res) => {
  User.getAll( (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "(controllers) Erro ao puchar os dados",
      });
    else {

      res.status(200).json(data.rows);
    }
  });
};

// exports.findAll = (req, res) => {
//   const nome = req.query.nome;
//   User.getAll(nome, (err, data) => {
//     if (err)
//       res.status(500).send({
//         message: err.message || "(controllers) Erro ao puchar os dados",
//       });
//     else {
//       //res.send(data);
//       res.status(200).json(data.rows);
//     }
//   });
// };


// autenticação
exports.findOne = (req, res) => {

  if (!req.body) {
    res.status(400).send({
      message: "body vaziu",
    });
  }

  const body = new User({
    email: req.body.email || null,
    senha: req.body.senha || null
  });


  User.findById(body, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `(controllers) pessoa não existe ${body}.`,
        });
      } else {
        res.status(500).send({
          message: "Erro ao buscar (controllers) " + body,
        });
      }
    } else res.send(data);
  });
};




// APARTIR DAQUI NÃO FOI TESTADO // CODIGO NÃO TESTADO // CODIGO NÃO TESTADO // CODIGO NÃO TESTADO // CODIGO NÃO TESTADO // CODIGO NÃO TESTADO 
// APARTIR DAQUI NÃO FOI TESTADO // CODIGO NÃO TESTADO // CODIGO NÃO TESTADO // CODIGO NÃO TESTADO // CODIGO NÃO TESTADO // CODIGO NÃO TESTADO 
// APARTIR DAQUI NÃO FOI TESTADO // CODIGO NÃO TESTADO // CODIGO NÃO TESTADO // CODIGO NÃO TESTADO // CODIGO NÃO TESTADO // CODIGO NÃO TESTADO 




exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Body Vaziu",
    });
  }
  console.log(req.body);
  User.updateById(
    req.params.id,
    new User(req.body),

    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `(controllers) erro ao achar a fixa com id:
${req.params.id}.`,
          });
        } else {
          res.status(500).send({
            message:
              "(controllers) erro ao mudar fixa com id: " + req.params.id,
          });
        }
      } else res.send(data);
    }
  );
};
// Delete a User with the specified id in the request
exports.delete = (req, res) => {
  User.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `(controllers) erro ao achar fixa com id:
${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message:
            "(controllers) erro ao deletar fixa com id: " + req.params.id,
        });
      }
    } else
      res.send({
        message: `User was deleted successfully!`,
      });
  });
};
// Delete all Users from the database.
exports.deleteAll = (req, res) => {
  User.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while removing all User.",
      });
    else
      res.send({
        message: `All Users were deleted
successfully!`,
      });
  });
};

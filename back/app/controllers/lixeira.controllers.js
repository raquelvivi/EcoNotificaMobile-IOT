
const Lixeira = require("../models/lixeira.model.js");



// Criar usuario
// exports.create = (req, res) => {

//   if (!req.body) {
//     res.status(400).send({
//       message: "body vaziu",
//     });
//   }

//   const LixeiraBody = new Lixeira({
//     nome: req.body.nome || null,
//     situacao: req.body.situacao || null,
//     ip: req.body.ip || null,
//     latitude: req.body.latitude || null,
//     longitude: req.body.longitude || null,
//     id: req.body.id || null,
//   });

//   Lixeira.create(LixeiraBody, (err, data) => {
//     if (err)
//       res.status(500).send({
//         message: err.message || "Erro ao criar Lixeira (controllers)",
//       });
//     else res.send(data);
//   });
// };


// Puxa todos os dados
exports.findAll = (req, res) => {
  Lixeira.getAll( (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "(controllers) Erro ao puchar os dados Lixeira",
      });
    else {

      res.status(200).json(data.rows);
    }
  });
};




exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Body Vaziu",
    });
  }
  console.log(req.body);
  Lixeira.updateById(
    req.params.id,
    new Lixeira(req.body),

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

// APARTIR DAQUI NÃO FOI TESTADO // CODIGO NÃO TESTADO // CODIGO NÃO TESTADO // CODIGO NÃO TESTADO // CODIGO NÃO TESTADO // CODIGO NÃO TESTADO 
// APARTIR DAQUI NÃO FOI TESTADO // CODIGO NÃO TESTADO // CODIGO NÃO TESTADO // CODIGO NÃO TESTADO // CODIGO NÃO TESTADO // CODIGO NÃO TESTADO 
// APARTIR DAQUI NÃO FOI TESTADO // CODIGO NÃO TESTADO // CODIGO NÃO TESTADO // CODIGO NÃO TESTADO // CODIGO NÃO TESTADO // CODIGO NÃO TESTADO 





// autenticação
exports.findOne = (req, res) => {

  if (!req.body) {
    res.status(400).send({
      message: "body vaziu",
    });
  }

  const body = new Lixeira({
    email: req.body.email || null,
    senha: req.body.senha || null
  });


  Lixeira.findById(body, (err, data) => {
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







// Delete a Lixeira with the specified id in the request
exports.delete = (req, res) => {
  Lixeira.remove(req.params.id, (err, data) => {
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
        message: `Lixeira was deleted successfully!`,
      });
  });
};
// Delete all Lixeiras from the database.
exports.deleteAll = (req, res) => {
  Lixeira.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while removing all Lixeira.",
      });
    else
      res.send({
        message: `All Lixeiras were deleted
successfully!`,
      });
  });
};

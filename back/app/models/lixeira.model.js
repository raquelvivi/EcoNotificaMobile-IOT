const pool = require("../config/db.js");


const Lixeira = function (lixo) {
  this.nome = lixo.nome;
  this.situacao = lixo.situacao;
  this.ip = lixo.ip;
  this.latitude = lixo.latitude;
  this.longitude = lixo.longitude;
  this.id = lixo.id;
  //user = lixo, Usuari = Lixeira
};


// Lixeira.create = (NewLixo, result) => {

//     pool.query(
//       "INSERT INTO lixeira (nome, email, senha, tipo, bairro, cidade) VALUES ($1, $2, $3, $4, $5, $6)",
//       [
//         NewLixo.nome,
//         NewLixo.email,
//         NewLixo.senha,
//         NewLixo.tipo,
//         NewLixo.bairro,
//         parseInt(NewLixo.cidade),
//       ],
//       (err, res) => {
//         if (err) {
//           console.log("error: ", err);
//           result(err, null);
//           return;
//         } else {
//           result(null, { nome: res.nome, ...NewLixo });
//         }
//       }
//     );
// };


// Lixeira.findById = (lixo, result) => {
//     console.log('findById lixo = ', lixo)

//         pool.query('SELECT * FROM lixeira WHERE email = $1 and senha = $2', [lixo.email, lixo.senha], (err,
//             res) => {
//             if (err) {
//                 //throw error
//                 console.log("error: ", err);
//                 result(err, null);
//                 return ;
//             }
//             if (res.rows.length) {
//                 console.log("lixeira: ", res.rows[0]);
//                 result(null, res.rows[0]);
//                 return;
//             }
            
//             console.log("lixo nao encontrado: res.length = ", res);
//             result({ kind: "not_found" }, null);
//         });

// };


Lixeira.getAll = ( result) => {
  let query = "SELECT * FROM lixeira";

  pool.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    // console.log("lixo: ", res.rows);
    result(null, res);
  });
};

Lixeira.updateById = (id, lixo, result) => {
  console.log(lixo);
  pool.query(
    "UPDATE lixeira SET nome = $1 , situacao = $2, ip = $3, latitude = $4, longitude = $5 WHERE id = $6",
    [lixo.nome, lixo.situacao, lixo.ip, lixo.latitude, lixo.longitude, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        // not found Aluno with the id
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("updated lixo: ", { id: id });
      result(null, { id: id });
    }
  );
};




// APARTIR DAQUI NÃO FOI TESTADO // CODIGO NÃO TESTADO // CODIGO NÃO TESTADO // CODIGO NÃO TESTADO // CODIGO NÃO TESTADO // CODIGO NÃO TESTADO 
// APARTIR DAQUI NÃO FOI TESTADO // CODIGO NÃO TESTADO // CODIGO NÃO TESTADO // CODIGO NÃO TESTADO // CODIGO NÃO TESTADO // CODIGO NÃO TESTADO 
// APARTIR DAQUI NÃO FOI TESTADO // CODIGO NÃO TESTADO // CODIGO NÃO TESTADO // CODIGO NÃO TESTADO // CODIGO NÃO TESTADO // CODIGO NÃO TESTADO 

Lixeira.remove = (id, result) => {
    pool.query("DELETE FROM lixo WHERE id = $1", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        if (res.affectedRows == 0) {
            // not found Aluno with the id
            result({ kind: "not_found" }, null);
            return;
        }
        console.log("deleted lixo with id: ", id);
        result(null, res);
    });
};
Lixeira.removeAll = result => {
    pool.query("DELETE FROM lixo", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log(`deleted ${res.affectedRows} lixo`);
        result(null, res);
    });
};
module.exports = Lixeira;
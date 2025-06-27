const pool = require("../config/db.js");
// constructor
const Fixass = function (fixa) {
    this.id = fixa.id;
    this.nome = fixa.nome;
    this.apelido = fixa.apelido;
    this.logradouro = fixa.logradouro;
    this.numero = fixa.numero;
    this.bairro = fixa.bairro;
    this.creditomax = fixa.creditomax;
    this.datapaga = fixa.datapaga;
    this.foto = fixa.foto;
};


Fixass.create = (NewFixa, result) => {

    pool.query("INSERT INTO fixa (nome, apelido, logradouro, numero, bairro, creditomax, datapaga) VALUES ($1, $2, $3, $4, $5, $6, $7)",
        [NewFixa.nome, NewFixa.apelido, NewFixa.logradouro, NewFixa.numero, NewFixa.bairro, parseFloat(NewFixa.creditomax), parseInt(NewFixa.datapaga)], (err, res) => {

            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }
            console.log("created fixa: ", {
                id: res.insertId, ...NewFixa
            });
            result(null, { id: res.insertId, ...NewFixa });
        });
};
Fixass.findById = (id, result) => {
    console.log('findById id or nome = ', id)

    if (/^\d+$/.test(id)) {

        pool.query('SELECT * FROM fixa WHERE id = $1', [id], (err,
            res) => {
            if (err) {
                //throw error
                console.log("error: ", err);
                result(err, null);
                return;
            }
            if (res.rows.length) {
                console.log("fixa encontrado: ", res.rows[0]); // isso barra a saida de mais de 1 pessoa
                result(null, res.rows[0]);
                return;
            }
            // not found aluno with the id
            console.log("fixa nao encontrado: res.length = ", res);
            result({ kind: "not_found" }, null);
        });

    } else if (/^[a-zA-Z\s]+$/.test(id)) {

        pool.query('SELECT * FROM fixa WHERE nome ILIKE $1', [`%${id}%`], (err,
            res) => {
            if (err) {
                //throw error
                console.log("error: ", err);
                result(err, null);
                return;
            }
            if (res.rows.length) {
                console.log("fixa encontrado: ", res.rows); // isso permite a saida de varias pessoas
                result(null, res.rows);
                return;
            }
            // not found aluno with the id
            console.log("fixa nao encontrado: res.length = ", res);
            result({ kind: "not_found" }, null);
        });


    } else {


        pool.query('SELECT * FROM fixa WHERE id = $1', [id], (err,
            res) => {
            if (err) {
                //throw error
                console.log("error: ", err);
                result(err, null);
                return;
            }
            if (res.rows.length) {
                console.log("fixa encontrado: ", res.rows[0]);
                result(null, res.rows[0]);
                return;
            }
            // not found aluno with the id
            console.log("fixa nao encontrado: res.length = ", res);
            result({ kind: "not_found" }, null);
        });





    };

};
Fixass.getAll = (nome, result) => {
    let query = "SELECT * FROM fixa";
    if (nome) {
        query += " WHERE nome nome ILIKE $1", [`%${id}%`];
    }
    pool.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        // console.log("fixa: ", res.rows);
        result(null, res);
    });
};
Fixass.updateById = (id, fixa, result) => {
    console.log(fixa)
    pool.query("UPDATE fixa SET nome = $1 , apelido = $2 , logradouro = $3 , numero = $4 , bairro = $5 , creditomax = $6 , datapaga = $7  WHERE id = $8",
        [fixa.nome, fixa.apelido, fixa.logradouro, fixa.numero, fixa.bairro, fixa.creditomax, fixa.datapaga, id], (err, res) => {
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
            console.log("updated fixa: ", { id: id });
            result(null, { id: id });
        }
    );
};
Fixass.remove = (id, result) => {
    pool.query("DELETE FROM fixa WHERE id = $1", id, (err, res) => {
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
        console.log("deleted fixa with id: ", id);
        result(null, res);
    });
};
Fixass.removeAll = result => {
    pool.query("DELETE FROM fixa", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log(`deleted ${res.affectedRows} fixa`);
        result(null, res);
    });
};
module.exports = Fixass;
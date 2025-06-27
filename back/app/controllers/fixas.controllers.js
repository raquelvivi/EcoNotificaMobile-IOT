const Fixas = require("../models/fixas.model.js");

// Create and Save a new Fixas
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "body vaziu"
        });
    }
    // Create a Fixas
    const fixasBody = new Fixas({
        nome: req.body.nome || null,
        apelido: req.body.apelido || null,
        logradouro: req.body.logradouro || null,
        numero: req.body.numero || null,
        bairro: req.body.bairro || null,
        creditomax: req.body.creditomax || null,
        datapaga: req.body.datapaga || null
    });
    
    // Save Fixas in the database

    Fixas.create(fixasBody, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Erro ao criar fixas (controllers)"
});
        else res.send(data);
    });
};
// Retrieve all Fixas from the database (with condition).
exports.findAll = (req, res) => {
    const nome = req.query.nome;
    Fixas.getAll(nome, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "(controllers) Erro ao puchar os dados"
});
        else {
            //res.send(data);
            res.status(200).json(data.rows)
        }
        
    });
};
// Find a single Fixas by Id
exports.findOne = (req, res) => {
    Fixas.findById(req.params.id, (err, data) => {

        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `(controllers) pesquisa nao encontrada com id ${ req.params.id }.`
});
} else {
    res.status(500).send({
        message: "Erro ao buscar (controllers) " +
            req.params.id
    });
}
} else
res.send(data);
});
};
// Update a Fixas identified by the id in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
            message: "Body Vaziu"
        });
    }
    console.log(req.body);
    Fixas.updateById(
        req.params.id,
        new Fixas(req.body),
        
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `(controllers) erro ao achar a fixa com id:
${req.params.id}.`
                    });
                } else {
                    res.status(500).send({
                        message: "(controllers) erro ao mudar fixa com id: " +
                            req.params.id
                    });
                }
            } else res.send(data);
        }
    );
};
// Delete a Fixas with the specified id in the request
exports.delete = (req, res) => {
    Fixas.remove(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `(controllers) erro ao achar fixa com id:
${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: "(controllers) erro ao deletar fixa com id: " +
                        req.params.id
                });
            }
        } else res.send({
            message: `Fixas was deleted successfully!`
        });
    });
};
// Delete all Fixass from the database.
exports.deleteAll = (req, res) => {
    Fixas.removeAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Fixas."
});
        else res.send({
            message: `All Fixass were deleted
successfully!` });
    });
};
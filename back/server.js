const express = require("express");

const cors = require("cors");
const app = express();
var corsOptions = {
    origin: "http://localhost:8081"
};
app.use(cors(corsOptions));

app.use(express.json()); /* bodyParser.json() is deprecated */

app.use(express.urlencoded({ extended: true })); /*
bodyParser.urlencoded() is deprecated */
// simple route
app.get("/", (req, res) => {
    res.json({
        message: "Funcionando ate aqui" });
});
    require("./app/routes/rotas.routes.js")(app);

    const PORT = process.env.PORT || 8080;
    app.listen(PORT, () => {
        console.log(`Server rodando na porta ${PORT}.`);
    });
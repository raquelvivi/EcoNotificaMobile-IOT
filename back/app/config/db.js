const pg = require("pg");
const { Pool, Client } = pg;
const dbConfig = require("../config/db.config.js");
const pool = new Pool({
    host: dbConfig.HOST,
    database: dbConfig.DATABASE,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    port: dbConfig.PORT,
    /* max = número máximo de clientes no pool */
    max: dbConfig.MAX,
    /* idleTimeoutMillis = Número de milissegundos que um cliente deve
    ficar ocioso no pool
    e não ser verificado, antes de ser desconectado. O pool manterá os
    clientes abertos e
    conectados ao backend até que o idleTimeoutMillis expire para cada
    cliente.*/
    idleTimeoutMillis: dbConfig.IDLETIMEOUTMILLIS,
    /*
    connectionTimeoutMillis = Número de milissegundos para esperar
    antes do tempo limite ao conectar
    um novo cliente por padrão é 0, o que significa que não há tempo
    limite
    */
    connectionTimeoutMillis: dbConfig.CONNECTIONTIMEOUTMILLIS
});
module.exports = pool;
// para criar um novo client: const client = await pool.connect()
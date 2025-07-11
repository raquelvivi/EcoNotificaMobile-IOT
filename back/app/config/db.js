require("dotenv").config();
console.log("Conectando ao banco em:", process.env.DB_HOST);
const { Pool } = require("pg");

// const pg = require("pg");
// const { Pool, Client } = pg;

// const dbConfig = require("../config/db.config.js");

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  ssl: {
    rejectUnauthorized: false,
  },
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

module.exports = pool;

const { Pool } = require("pg");

const pool = new Pool({
  connectionString: "postgresql://econotifica_user:jpAn4zYvBxeVwVHh1uvB0ml9dTrpkwTr@dpg-d1j7o015pdvs73cugg8g-a.oregon-postgres.render.com:5432/econotifica_pl0c",
  ssl: {
    rejectUnauthorized: false,
  },
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

module.exports = pool;

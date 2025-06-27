const { Pool } = require("pg");

const pool = new Pool({
  connectionString: "postgresql://postgres:ifrn.cnmamae@db.tqhuravnknugidiuaxyf.supabase.co:5432/postgres",
  ssl: {
    rejectUnauthorized: false,
  },
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

module.exports = pool;

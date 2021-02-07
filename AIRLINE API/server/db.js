const Pool = require("pg").Pool;

const pool = new Pool({
    user : "postgres",
    password : "mel3k1.",
    database: "APIDatabase",
    host : "localhost",
    port : 5432
});

module.exports = pool;
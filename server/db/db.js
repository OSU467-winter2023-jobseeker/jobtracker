const dotenv = require('dotenv');
dotenv.config();

const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    host: process.env.DB_HOST,
    database: 'postgres',
    password: process.env.DB_PASS,
    port: 5432,
});

module.exports = { pool };
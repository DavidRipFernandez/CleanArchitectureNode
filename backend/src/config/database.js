
const sqlConnection = require('mssql');
require('dotenv').config();

const dbConfiguration = {
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    server : process.env.DB_SERVER,
    database : process.env.DB_NAME,
    options : {
        encrypt : false,
        enableArithAbort: true
    }
};

const pool = new sqlConnection.ConnectionPool(dbConfiguration);
const poolConnect = pool.connect();

pool.on('error', err => {
    console.error('Error de conexión en SQL Server..', err);
});

module.exports = {
    sqlConnection,
    poolConnect,
    pool
};



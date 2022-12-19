const mysql = require('mysql'),
dbConfig = require('../config/db_config');

const connection = mysql.createConnection({
    host:dbConfig.host,
    user:dbConfig.username,
    password:dbConfig.password,
    database:dbConfig.db,
    port:dbConfig.port});

connection.connect(error => {
    if(error) throw error
    console.log("successfully connnected to db...");
});
module.exports = connection;

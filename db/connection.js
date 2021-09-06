const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Molang23!',
        database: 'employees'
    },
    console.log ('You Are Now Viewing the Employee Database')
)

module.exports = db;

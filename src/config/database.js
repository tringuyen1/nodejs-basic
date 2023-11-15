const mysql = require('mysql2');

// test connection 
// hạn chế lỗi sập server nên dùng createpool
const connection = mysql.createPool({
     host: `${process.env.DB_HOST}`,
     user: `${process.env.DB_USER}`, // defeault empty
     database: `${process.env.DB_NAME}`,
     port: `${process.env.DB_PORT}`, // default 3306
     password: `${process.env.DB_PASSWORD}`,
     waitForConnections: true,
     connectionLimit: 10,
     queueLimit: 0
});

module.exports = {
     connection
}
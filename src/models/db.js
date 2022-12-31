const mysql = require('mysql');
const myconnection = require("express-myconnection");
const dbOptions = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'LiveChat'
}


module.exports = {
    mysql,
    myconnection,
    dbOptions,
};
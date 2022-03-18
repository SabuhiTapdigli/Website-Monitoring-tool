const mysql = require('mysql2')
require('dotenv').config()


const host = process.env.HOST
const user = process.env.DB_USER
const password = process.env.DB_PASSWORD
const database = process.env.DB_DATABASE

const pool = mysql.createPool({
    connectionLimit :100,
    host:host,
    user:user,
    password:password,
    database:database

})

module.exports = pool.promise()
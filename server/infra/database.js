const pgp = require("pg-promise")()
const db = pgp({
    host: "database", // Nome do container docker 
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWD
})


module.exports = db
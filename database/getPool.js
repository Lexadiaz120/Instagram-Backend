require('dotenv').config()
const mysql = require('mysql2/promise')

const {
  DATABASE_HOST,
  DATABASE_PORT,
  DATABASE_USER,
  DATABASE_PASSWORD,
  DATABASE_NAME,
} = process.env

let pool

const getPool = () => {
  /** Si no hay un pool ya creado, llamamos a createPool con los datos requeridos para crear uno */
  if (!pool) {
    pool = mysql?.createPool({
      host: 'localhost',
      port: '3306',
      user: 'root',
      password: 'Motinmotin120$',
      database: 'instagram_app',
      timezone: 'Z',
      connectionLimit: 10,
    })
  }

  /** Una vez tenemos el pool, lo retornamos para poder hacerle consultas. Él se encargará automáticamente de abrir y cerrar conexiones con la DB, según sea necesario */
  return pool
}

module.exports = getPool

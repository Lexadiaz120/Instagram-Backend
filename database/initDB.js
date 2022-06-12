require('dotenv').config()
const getPool = require('./getPool')

const initDB = async () => {
  try {
    const pool = getPool()
    await pool.query(`DROP TABLE IF EXISTS users;`)
    console.log('Creando tabla users...')
    await pool.query(`
CREATE TABLE IF NOT EXISTS users(
id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
username VARCHAR(100) NOT NULL,
email VARCHAR(100) NOT NULL,
passwd VARCHAR(100) NOT NULL,
registrationcode VARCHAR(100)
);
`)
    await pool.query(`
CREATE TABLE IF NOT EXISTS photo(
id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
name_photo VARCHAR(100) NOT NULL,
description_photo VARCHAR(300) NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
user_id INT UNSIGNED,    	
FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
);
`)

    await pool.query(`
CREATE TABLE IF NOT EXISTS likes(
like_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
user_id INT UNSIGNED,
  photo_id INT UNSIGNED,
  FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE,
  FOREIGN KEY (photo_id) REFERENCES photo (id) ON DELETE CASCADE
);
  `)

    console.log('¡Tabla creada!')
  } catch (err) {
    console.error(err)
  } finally {
    process.exit()
  }
}

initDB()

const getPool = require('../../database/getPool')

const insertUser = async ({email, encryptedPassword, username}) => {
  const pool = getPool()
  const [{insertId}] = await pool.query(
    'INSERT INTO users (username, email, passwd) VALUES (?, ?, ? )',
    [username, email, encryptedPassword]
  )
  return insertId
}
module.exports = insertUser

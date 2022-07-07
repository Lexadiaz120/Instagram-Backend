const getPool = require('../../database/getPool')

const insertUser = async ({email, encryptedPassword, username, avatarName}) => {
  const pool = getPool()
  const [{insertId}] = await pool.query(
    'INSERT INTO users (username, email, passwd, avatar) VALUES (?, ?, ?, ? )',
    [username, email, encryptedPassword, avatarName]
  )
  return insertId
}
module.exports = insertUser

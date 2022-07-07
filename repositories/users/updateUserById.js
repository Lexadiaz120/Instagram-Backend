const getPool = require('../../database/getPool')
const bcrypt = require('bcrypt')

const updateUserById = async ({avatar, username, email, passwd, id}) => {
  const pool = getPool()

  passwd = await bcrypt.hash(passwd, 10)

  const [{affectedRows}] = await pool.query(
    'UPDATE users SET avatar = ?,  username = ?,  email = ?, passwd = ? WHERE id = ?',
    [avatar, username, email, passwd, id]
  )

  return affectedRows
}

module.exports = updateUserById

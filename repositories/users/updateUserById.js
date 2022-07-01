const getPool = require('../../database/getPool')
const bcrypt = require('bcrypt')

const updateUserById = async ({username, email, passwd, id}) => {
  const pool = getPool()

  passwd = await bcrypt.hash(passwd, 10)

  const [{affectedRows}] = await pool.query(
    'UPDATE users SET  email = ?, passwd = ? WHERE id = ?',
    [email, passwd, id]
  )

  return affectedRows
}

module.exports = updateUserById

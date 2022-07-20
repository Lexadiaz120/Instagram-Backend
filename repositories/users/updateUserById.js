const getPool = require('../../database/getPool')
const bcrypt = require('bcrypt')
const {generateError} = require('../../helpers')

const updateUserById = async ({avatar, username, email, passwd, id}) => {
  console.log(passwd, 'es password')
  if (passwd.length == 0) {
    throw generateError('Password length is zero, we will not change it', 400)
  } else {
    passwd = await bcrypt.hash(passwd, 10)
  }
  const pool = getPool()
  const [{affectedRows}] = await pool.query(
    'UPDATE users SET avatar = ?,  username = ?,  email = ?, passwd = ? WHERE id = ?',
    [avatar, username, email, passwd, id]
  )
  return affectedRows
}

module.exports = updateUserById

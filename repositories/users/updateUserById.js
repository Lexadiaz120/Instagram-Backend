const getPool = require('../../database/getPool')
const bcrypt = require('bcrypt')
const {generateError} = require('../../helpers')

const updateUserById = async ({avatar, username, email, passwd, id}, req) => {
  if (req.body.passwd != undefined) {
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

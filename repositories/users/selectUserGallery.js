const getPool = require('../../database/getPool')
const selectUserGallery = async (id) => {
  const pool = getPool()
  const [user] = await pool.query(
    `SELECT ph.name_photo, ph.id, u.username, u.email, u.avatar FROM photo ph
     RIGHT JOIN users u  ON ph.user_id = u.id WHERE u.id= ?;`,
    [id]
  )
  return user
}

module.exports = selectUserGallery

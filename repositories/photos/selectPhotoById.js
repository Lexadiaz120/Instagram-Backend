const getPool = require('../../database/getPool')

const selectPhotoById = async (id) => {
  const pool = getPool()

  const [[photo]] = await pool.query(
    'SELECT ph.*, u.avatar, u.username FROM photo ph INNER JOIN users u ON u.id = ph.user_id WHERE ph.id = ?',
    [id]
  )

  return photo
}

module.exports = selectPhotoById

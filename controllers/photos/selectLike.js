const getPool = require('../../database/getPool')
const selectLike = async (photo_id, userId) => {
  const pool = getPool()
  const [[like]] = await pool.query(
    'SELECT * FROM likes WHERE photo_id = ? AND user_id = ?',
    [photo_id, userId]
  )
  return like
}

module.exports = selectLike

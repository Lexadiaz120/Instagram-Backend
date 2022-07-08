const getPool = require('../../database/getPool')

const selectLikeByUser = async (photo_id, user_id) => {
  
  const pool = getPool()
  
  const [[likes]] = await pool.query(
    'SELECT * FROM likes WHERE photo_id = ? AND user_id = ?',
    [photo_id, user_id]
  )
  return likes
}
module.exports = selectLikeByUser

const getPool = require('../../database/getPool')

const deleteLike = async (photo_id, user_id) => {
  const pool = getPool()
  const [{affectedRows}] = await pool.query(
    'DELETE FROM likes WHERE photo_id = ? AND user_id = ?',
    [photo_id, user_id]
  )
  return affectedRows
}
module.exports = deleteLike

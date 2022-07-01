const getPool = require('../../database/getPool')
const selectLikeById = async (id) => {
  const pool = getPool()
  const [[like]] = await pool.query(
    'SELECT like_id FROM likes WHERE like_id = ?',
    [id]
  )
  return like
}
module.exports = selectLikeById

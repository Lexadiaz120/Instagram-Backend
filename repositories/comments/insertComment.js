const getPool = require('../../database/getPool')
const insertComment = async ({comment, user_id, photoId}) => {
  const pool = getPool()
  const [{insertId}] = await pool.query(
    'INSERT INTO comments(comment, user_id, photo_id) VALUES (?, ?, ?)',
    [comment, user_id, photoId]
  )
  return insertId
}
module.exports = insertComment

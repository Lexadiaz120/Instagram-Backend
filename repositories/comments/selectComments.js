const getPool = require('../../database/getPool')

const selectComments = async () => {
  const pool = getPool()
  const [comment] = await pool.query(
    `SELECT c.comments_id, c.comments, ph.id AS photo_id, u.username, u.id AS user_id, u.avatar 
    FROM comments c
    INNER JOIN photo ph ON c.photo_id = ph.id
    INNER JOIN users u ON c.user_id = u.id;`
  )
  return comment
}
module.exports = selectComments

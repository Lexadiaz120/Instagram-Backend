const getPool = require('../../database/getPool')

const selectCommentById = async (photoId) => {
  const pool = getPool()

  const [commentPhoto] = await pool.query(
    `SELECT c.comments_id, c.comments, ph.id AS photoId, u.username, u.id AS user_id FROM comments c
     INNER JOIN photo ph ON c.photo_id = ph.id
     INNER JOIN users u ON c.user_id = u.id 
     WHERE ph.id = ?`,
    [photoId]
  )

  return commentPhoto
}

module.exports = selectCommentById;

const getPool = require('../../database/getPool')

const selectCommentById = async (commentId) => {
  const pool = getPool()

  const [[comment]] = await pool.query(
    `SELECT c.*, u.username, u.avatar
    FROM comments c
    INNER JOIN users u ON c.user_id = u.id
    WHERE c.comments_id = ?;`,
    [commentId]
  )

  return comment
}

module.exports = selectCommentById

const getPool = require('../../database/getPool')

const selectLikeByPhotoId = async (photoId) => {
  const pool = getPool()

  const [likePhoto] = await pool.query(
    `SELECT COUNT(l.like_id) AS likesCount, ph.name_photo, ph.id AS photo_id, u.username, u.id AS user_id 
     FROM likes l
     INNER JOIN photo ph ON l.photo_id = ph.id
     INNER JOIN users u ON l.user_id = u.id
     WHERE ph.id = ?;`,
    [photoId]
  )

  return likePhoto;
}

module.exports = selectLikeByPhotoId;
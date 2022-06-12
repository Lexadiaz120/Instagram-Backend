const getPool = require('../../database/getPool')

const selectPhotos = async ({description_photo}) => {
  const pool = getPool()
  let query = 'SELECT * from photo'
  if (description_photo) {
    query += ' WHERE description_photo LIKE ?'
  }
  const [photos] = await pool.query(query, [`%${description_photo}%`])
  console.log(photos, 'soy photo')
  return photos
}

module.exports = selectPhotos

const getPool = require('../../database/getPool')
const getUserById = async (req, res, next) => {
  try {
    const {id} = req.params
    console.log(id)
    const pool = getPool()
    const [[user]] = await pool.query(
      'SELECT ph.name_photo, u.username FROM photo ph INNER JOIN users u ON ph.user_id = u.id WHERE u.id = ?',
      [id]
    )
    console.log(user)
    res.status(200).send({status: 'ok', data: user})
    return user
  } catch (error) {
    console.log(error, 'El usuario no existe')
  }
}
module.exports = getUserById

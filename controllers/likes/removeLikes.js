const getPool = require('../../database/getPool')
const removeLikes = async (req, res, next) => {
  try {
    const pool = getPool()
    const {like_id} = req.params
    console.log(like_id)
    const [likes] = await pool.query('DELETE FROM likes WHERE  like_id =  ?', [
      like_id,
    ])
    res.send({status: 'ok', data: likes})
    return likes
  } catch (error) {
    next(error)
  }
}
module.exports = removeLikes

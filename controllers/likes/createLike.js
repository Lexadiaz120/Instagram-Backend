const insertLikes = require('../../repositories/likes/insertLikes')
const createLike = async (req, res, next) => {
  try {
    let user_id = req.auth.id
    console.log(user_id, 'hola')
    const {photo_id} = req.params
    console.log(photo_id, 'id de photo')
    const insertId = await insertLikes({user_id, photo_id})
    res.status(201).send({
      status: 'ok',
      data: {id: insertId, user_id, photo_id},
    })
  } catch (error) {
    next(error)
  }
}
module.exports = createLike

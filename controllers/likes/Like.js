const {generateError} = require('../../helpers')
const {selectLikeByUser, deleteLike} = require('../../repositories/likes')
const insertLikes = require('../../repositories/likes/insertLikes')
const Like = async (req, res, next) => {
  try {
    let user_id = req.auth.id
    let {photo_id} = req.params
    if (photo_id === null && !photo_id) {
      throw generateError('Photo id doesn´t exists', 400)
    }
    const photo = await selectLikeByUser(photo_id, user_id)
    if (photo) {
      await deleteLike(photo_id, user_id)
      res.status(200).send({status: 'ok', message: 'Like deleted succesfully'})
      return
    }
    await insertLikes({user_id, photo_id})
    res.status(201).send({
      status: 'ok',
      message: 'Like created succesfully',
    })
  } catch (error) {
    next(error)
  }
}
module.exports = Like

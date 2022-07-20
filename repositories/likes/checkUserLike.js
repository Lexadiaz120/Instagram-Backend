const selectLike = require('../../controllers/photos/selectLike')

const checkUserLike = async (req, res, next) => {
  try {
    const {photo_id} = req.params
    const userId = req.auth.id
    const vote = await selectLike(photo_id, userId)
    res
      .status(201)
      .send({status: 'ok', data: {didUserVote: vote ? true : false}})
  } catch (error) {
    next(error)
  }
}

module.exports = checkUserLike

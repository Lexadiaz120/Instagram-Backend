const generateError = require('../../helpers/generateError')
const selectCommentById = require('../../repositories/comments/selectCommentById')

const getCommentById = async (req, res, next) => {
  try {
    const {commentId} = req.params
    const comment = await selectCommentById(commentId)
    if (!comment) {
      generateError('Comment does not exists', 404)
    }
    res.status(200).send({status: 'ok', data: comment})
  } catch (error) {
    next(error)
  }
}

module.exports = getCommentById

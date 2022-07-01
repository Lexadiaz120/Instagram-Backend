const deleteComment = require('../../repositories/comments/deleteComment')
const removeCommentById = async (req, res, next) => {
  try {
    const {commentId} = req.params
    const commentDB = await selectCommentById(commentId)
    if (!commentDB) {
      generateError('Comment does not exists', 404)
    }
    const userId = req.auth.id
    await deleteComment(commentId)
    res.status(200).send({status: 'ok', message: 'Comment deleted'})
  } catch (error) {
    next(error)
  }
}

module.exports = removeCommentById

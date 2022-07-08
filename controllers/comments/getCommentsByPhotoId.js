const generateError = require('../../helpers/generateError')
const selectCommentByPhotoId = require('../../repositories/comments/selectCommentByPhotoId')

const getCommentByPhotoId = async (req, res, next) => {
  try {
    const {photoId} = req.params
    const commentPhoto = await selectCommentByPhotoId(photoId)
    if (!commentPhoto) {
      generateError('Comment does not exists', 404)
    }
    res.status(200).send({status: 'ok', data: commentPhoto})
    
  } catch (error) {
    next(error)
  }
}

module.exports = getCommentByPhotoId;
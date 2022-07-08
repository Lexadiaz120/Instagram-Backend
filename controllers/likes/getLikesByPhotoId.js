const generateError = require('../../helpers/generateError')
const selectLikeByPhotoId = require('../../repositories/likes/selectLikeByPhotoId');

const getLikesByPhotoId = async (req, res, next) => {
  try {
    const {photoId} = req.params
    const likePhoto = await selectLikeByPhotoId(photoId)
    if (!likePhoto) {
      generateError('Like does not exists', 404)
    }
    res.status(200).send({status: 'ok', data: likePhoto})
    
  } catch (error) {
    next(error)
  }
}

module.exports = getLikesByPhotoId;
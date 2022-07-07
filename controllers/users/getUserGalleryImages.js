const {generateError} = require('../../helpers')
const selectUserGallery = require('../../repositories/users/selectUserGallery')

const getUserGalleryImages = async (req, res, next) => {
  try {
    const {userId} = req.params
    console.log(userId)
    const user = await selectUserGallery(userId)
    if (!user) {
      generateError('User does not exists', 404)
    }
    res.status(200).send({status: 'ok', data: user})
  } catch (error) {
    next(error)
  }
}

module.exports = getUserGalleryImages

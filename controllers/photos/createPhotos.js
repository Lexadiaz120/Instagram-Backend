const {uploadImage, generateError} = require('../../helpers')
const insertPhotos = require('../../repositories/photos/insertPhotos')
const createPhotoSchema = require('../../schemas/photos/createPhotoSchema')
const createPhotos = async (req, res, next) => {
  try {
    let user_id = req.auth.id
    await createPhotoSchema.validateAsync(req.body)
    const {description_photo} = req.body
    if (!req.files || Object.keys(req.files).length === 0) {
      throw generateError('You must upload at least one image', 400)
    }
    let {foto} = req.files
    let name_photo = await uploadImage(foto?.data)
    await insertPhotos({
      name_photo,
      description_photo,
      user_id,
    })
    res.status(201).send({
      status: 'ok',
      data: {name_photo, description_photo, user_id},
    })
  } catch (error) {
    next(error)
  }
}
module.exports = createPhotos

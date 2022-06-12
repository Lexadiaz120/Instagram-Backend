const {processAndSaveImage, uploadImage} = require('../../helpers')
const insertPhotos = require('../../repositories/photos/insertPhotos')
const createPhotos = async (req, res, next) => {
  try {
    let user_id = req.auth.id
    const {description_photo} = req.body
    const {foto} = req.files
    console.log(foto)
    const name_photo = await uploadImage(foto?.data)
    const insertId = await insertPhotos({
      name_photo,
      description_photo,
      user_id,
    })
    res.status(201).send({
      status: 'ok',
      data: {id: insertId, name_photo, description_photo, user_id},
    })
  } catch (error) {
    next(error)
  }
}
module.exports = createPhotos
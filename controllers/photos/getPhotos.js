const {selectPhotos} = require('../../repositories/photos')
const getPhotos = async (req, res, next) => {
  try {
    const {description_photo} = req.query
    const photos = await selectPhotos({description_photo})
    console.log(photos, 'todos photos')
    res.status(200).send({status: 'ok', data: photos})
  } catch (error) {
    next(error)
  }
}

module.exports = getPhotos

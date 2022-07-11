const {generateError} = require('../../helpers')
const selectPhotoById = require('../../repositories/photos/selectPhotoById')
const getPhotoById = async (req, res, next) => {
  try {
    const {id} = req.params
    console.log(id)

    const photo = await selectPhotoById(id)
    console.log(photo, 'datos de foto')

    if (!photo) {
      generateError('Photo does not exists', 404)
    }

    res.status(200).send({status: 'ok', data: photo})
  } catch (error) {
    next(error)
  }
}

module.exports = getPhotoById

const Joi = require('joi')
const generateError = require('../../helpers/generateError')

const createPhotoSchema = Joi.object({
  description_photo: Joi.string()
    .min(4)
    .max(500)
    .required()
    .error(
      generateError(
        'Description for photo is required and must have between 4 and 500 characters',
        400
      )
    ),
})

module.exports = createPhotoSchema

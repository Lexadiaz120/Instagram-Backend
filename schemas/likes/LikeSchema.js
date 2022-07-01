const Joi = require('joi')
const {generateError} = require('../../helpers')

const createLikeSchema = Joi.object({
  photo_id: Joi.string()
    .min(4)
    .max(100)
    .required()
    .error(
      generateError('Photo id  is required and must have id of post', 400)
    ),
})

module.exports = createLikeSchema

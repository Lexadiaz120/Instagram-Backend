const Joi = require('joi')
const generateError = require('../../helpers/generateError')

const editUserSchema = Joi.object({
  email: Joi.string()
    .min(4)
    .max(100)
    .error(generateError('Title must have between 4 and 100 characters', 400)),
  passwd: Joi.string()
    .min(4)
    .max(500)
    .error(
      generateError('Password must have between 4 and 500 characters', 400)
    ),
})
  .min(1)
  .messages({'object.min': 'Data must have at least one property to update'})

module.exports = editUserSchema

const Joi = require('joi')
const generateError = require('../../helpers/generateError')

const registerUserSchema = Joi.object({
  username: Joi.string()
    .min(4)
    .max(100)
    .required()
    .error(
      generateError(
        'Username is required. Must be a valid one and must have between 4 and 100 characters',
        400
      )
    ),
  email: Joi.string()
    .email()
    .min(4)
    .max(100)
    .required()
    .error(
      generateError(
        'Email is required. Must be a valid one and must have between 4 and 100 characters',
        400
      )
    ),
  passwd: Joi.string()
    .min(4)
    .max(100)
    .required()
    .error(
      generateError(
        'Passwd is required and must have between 4 and 100 characters',
        400
      )
    ),
})

module.exports = registerUserSchema

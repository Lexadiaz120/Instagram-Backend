const Joi = require('joi')
const generateError = require('../../helpers/generateError')

const idUserSchema = Joi.number()
  .required()
  .error(generateError('User id is required and must be a number', 404))

module.exports = idUserSchema

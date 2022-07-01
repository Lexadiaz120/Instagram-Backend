const bcrypt = require('bcrypt')
const generateError = require('../../helpers/generateError')
const {insertUser, selectUserByEmail} = require('../../repositories/users')
const {registerUserSchema} = require('../../schemas')

const registerUser = async (req, res, next) => {
  try {
    await registerUserSchema.validateAsync(req.body)
    const {username, email, passwd} = req.body
    const userWithSameEmail = await selectUserByEmail(email)
    if (userWithSameEmail) {
      throw generateError('Already exists  an user with the same email')
    }
    const encryptedPassword = await bcrypt.hash(passwd, 10)
    const insertId = await insertUser({
      username,
      email,
      encryptedPassword,
    })
    console.log(insertId)
    res.status(201).send({status: 'ok', data: {id: insertId}})
  } catch (error) {
    next(error)
  }
}
module.exports = registerUser

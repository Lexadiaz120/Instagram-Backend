const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const generateError = require('../../helpers/generateError')
const {selectUserByEmail} = require('../../repositories/users')
const {loginUserSchema} = require('../../schemas')
const loginUser = async (req, res, next) => {
  try {
    await loginUserSchema.validateAsync(req.body)
    const {email, passwd} = req.body
    const user = await selectUserByEmail(email)
    const encryptedPassword = user?.passwd
    const isLoginValid =
      user && (await bcrypt.compare(passwd, encryptedPassword))
    console.log(isLoginValid)
    if (!isLoginValid) {
      throw generateError('Wrong password or email', 400)
    }
    const tokenPayload = {
      id: user.id,
    }
    const token = jwt.sign(tokenPayload, process.env.JWT_SECRET, {
      expiresIn: '30d',
    })
    res.status(200).send({status: 'ok', data: {token, userId: tokenPayload.id}})
  } catch (error) {
    next(error)
  }
}

module.exports = loginUser

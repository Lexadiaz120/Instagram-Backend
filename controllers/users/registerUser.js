const bcrypt = require('bcrypt')
const {insertUser} = require('../../repositories/users')
const registerUser = async (req, res, next) => {
  try {
    const {username, email, passwd} = req.body
    const encryptedPassword = await bcrypt.hash(passwd, 10)
    const insertId = await insertUser({
      username,
      email,
      encryptedPassword,
    })
    console.log(insertId)
    res.status(201).send({status: 'ok', data: {id: insertId}})
  } catch (error) {
    console.log(error)
  }
}

module.exports = registerUser

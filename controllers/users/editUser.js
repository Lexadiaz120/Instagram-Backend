const {generateError, uploadImage} = require('../../helpers')
const {selectUserById, updateUserById} = require('../../repositories/users')
const editUserSchema = require('../../schemas/users/editUserSchema')
const idUserSchema = require('../../schemas/users/idUserSchema')
const bcrypt = require('bcrypt')

const editUser = async (req, res, next) => {
  try {
    const idUser = req.auth.id
    const userDB = await selectUserById(idUser)
    let {avatar} = req.files
    avatar = await uploadImage(avatar?.data)
    if (!userDB) {
      throw generateError('User doesn´t exists', 400)
    }
    const userId = req.auth.id
    if (userDB.id !== userId) {
      throw generateError("You cant update someone else's entry", 400)
    }
    await updateUserById({...userDB, ...req.body, avatar})
    res.status(200).send({status: 'ok', message: 'User updated'})
  } catch (error) {
    next(error)
  }
}

module.exports = editUser

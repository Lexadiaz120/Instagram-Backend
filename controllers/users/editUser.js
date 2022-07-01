const {generateError} = require('../../helpers')
const {selectUserById, updateUserById} = require('../../repositories/users')
const editUserSchema = require('../../schemas/users/editUserSchema')
const idUserSchema = require('../../schemas/users/idUserSchema')

const editUser = async (req, res, next) => {
  try {
    const {idUser} = req.params
    const userDB = await selectUserById(idUser)
    if (!userDB) {
      throw generateError('User doesn´t exists', 400)
    }
    const userId = req.auth.id
    if (userDB.id !== userId) {
      throw generateError("You cant update someone else's entry", 400)
    }
    await updateUserById({...userDB, ...req.body})
    res.status(200).send({status: 'ok', message: 'User updated'})
  } catch (error) {
    next(error)
  }
}

module.exports = editUser

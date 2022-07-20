const {generateError, uploadImage} = require('../../helpers')
const {selectUserById, updateUserById} = require('../../repositories/users')
const editUserSchema = require('../../schemas/users/editUserSchema')
const idUserSchema = require('../../schemas/users/idUserSchema')

const editUser = async (req, res, next) => {
  try {
    const idUser = req.auth.id
    console.log(idUser)
    const userDB = await selectUserById(idUser)
    console.log(req.body, 'cuerpo ')
    const {username, email, passwd} = userDB
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

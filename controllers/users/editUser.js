const { selectUserById, updateUserById } = require("../../repositories/users") 
const editUser = async (req, res, next) => {
  try {
    const {idUser} = req.params
    const userDB = await selectUserById(idUser) 
    console.log(userDB)
    if (!userDB) {
      const error = new Error('User does not exists')
      error.statusCode = 404
      throw error
    }
    const userId = req.auth.id; 
    console.log(userId, "id de usuario authorizado"); 
    console.log(userDB.id, "id del usuario que pedimos query")
    if (userDB.id !== userId) {
      const error = new Error('User does not exists')
      error.statusCode = 404
      throw error
    }
    await updateUserById({...userDB, ...req.body})
    res.status(200).send({status: 'ok', message: 'User updated'})
  } catch (error) {
    next(error)
  }
}

module.exports = editUser

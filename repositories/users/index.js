const insertUser = require('./insertUser')
const selectUserByEmail = require('./selectUserByEmail') 
const selectUserById = require('./selectUserById')
const updateUserById = require('./updateUserById')
module.exports = {
  insertUser,
  selectUserByEmail,
  selectUserById,
  updateUserById
}

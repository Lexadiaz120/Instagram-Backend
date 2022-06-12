const express = require('express')
const fileUpload = require('express-fileupload')
const { createLike, removeLikes } = require('./controllers/likes') 
require('dotenv').config()
const {
  createPhotos,
  selectLastPublications,
  getPhotos,
} = require('./controllers/photos')
const {
  registerUser,
  loginUser,
  getUserProfileById,
} = require('./controllers/users')
const editUser = require('./controllers/users/editUser')
const {validateAuth} = require('./middlewares')
const app = express()
app.use(fileUpload())
app.use(express.json())
app.get('/photos', getPhotos)
app.get('/userprofile/:id', getUserProfileById)
app.get('/feed', selectLastPublications)
app.post('/likephoto/:photo_id', validateAuth, createLike)
app.post('/posts', validateAuth, createPhotos)
app.post('/login', loginUser)
app.post('/newuser', registerUser)
app.post('/postphoto', validateAuth, createPhotos)
app.patch('/users/:idUser', validateAuth , editUser )
app.delete('/deletelike/:like_id', removeLikes)
app.use((req, res, next) => {
  console.log('Middleware normal...')
})
app.use((error, req, res, next) => {
  console.error(error)
  res.statusCode = error.statusCode || 500
  res.send({status: 'error', message: error.message})
})
app.listen(3000, () => {
  console.log(`Server listening on http://localhost:${3000}`)
})

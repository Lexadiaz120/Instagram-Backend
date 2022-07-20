const express = require('express')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const getCommentById = require('./controllers/comments/getCommentById')
const getComments = require('./controllers/comments/getComments')
const getCommentByPhotoId = require('./controllers/comments/getCommentsByPhotoId')
const removeCommentById = require('./controllers/comments/removeCommentById')
const getLikesByPhotoId = require('./controllers/likes/getLikesByPhotoId')
const createComment = require('./controllers/comments/createComment')
const {Like} = require('./controllers/likes')
require('dotenv').config()
const {
  createPhotos,
  selectLastPublications,
  getPhotos,
} = require('./controllers/photos')

const {
  registerUser,
  loginUser,
  getUserGalleryImages,
} = require('./controllers/users')

const editUser = require('./controllers/users/editUser')
const {generateError} = require('./helpers')
const {validateAuth, handleError} = require('./middlewares')
const getUserInfo = require('./controllers/users/getUserInfo')
const {validate} = require('./schemas/photos/createPhotoSchema')
const getPhotoById = require('./controllers/photos/getPhotoById')
const checkUserLike = require('./repositories/likes/checkUserLike')

const app = express()

const { SERVER_PORT } = process.env;

app.use(fileUpload())
app.use(express.static('uploads'))
app.use(express.json())
app.use(
  cors({
    origin: ['http://localhost:3000'],
  })
)
app.get('/photos', getPhotos)
app.get('/photo/:id', getPhotoById)
app.get('/userProfile/:userId', getUserGalleryImages)
app.get('/profile', validateAuth, getUserInfo)
app.get('/feed', selectLastPublications)
app.post('/posts', validateAuth, createPhotos)
app.post('/login', loginUser)
app.post('/newuser', registerUser)
app.patch('/editprofile', validateAuth, editUser)

/* Comments */
app.get('/comments/:commentId', getCommentById)
app.post('/comments/:photoId', validateAuth, createComment)
app.get('/comments', getComments)
app.get('/photoComments/:photoId', getCommentByPhotoId)

/* Likes */
app.post('/likephoto/:photo_id', validateAuth, Like)
app.get('/photoLikes/:photoId', getLikesByPhotoId)
app.get('/likes/:photo_id/checkLike', validateAuth, checkUserLike)

app.use(handleError)

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on http://localhost:${SERVER_PORT}`)
})

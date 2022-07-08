const express = require('express')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const createComment = require('./controllers/comments/createComment')
const getCommentById = require('./controllers/comments/getCommentById')
const getComments = require('./controllers/comments/getComments')
const removeCommentById = require('./controllers/comments/removeCommentById')
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
const app = express()
app.use(fileUpload())
app.use(express.static('uploads'))
app.use(express.json())
app.use(
  cors({
    origin: ['http://localhost:3000'],
  })
)
app.get('/photos', getPhotos)
app.get('/userProfile/:userId', getUserGalleryImages)
app.get('/profile', validateAuth, getUserInfo)
app.get('/feed', selectLastPublications)

app.post('/posts', validateAuth, createPhotos)
app.post('/login', loginUser)
app.post('/newuser', registerUser)


app.patch('/editprofile', validateAuth, editUser);

/* Comments */
app.get('/comments', getComments);
app.get('/comments/:commentId', getCommentById);
app.post('/comments/:photoId', validateAuth, createComment);

/* Likes */

app.post('/likephoto/:photo_id', validateAuth, Like)


app.use(handleError)

app.listen(5000, () => {
  console.log(`Server listening on http://localhost:${5000}`)
})

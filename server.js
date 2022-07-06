const express = require('express')
const cors = require("cors");
const fileUpload = require('express-fileupload')
const createComment = require('./controllers/comments/createComment')
const getCommentById = require('./controllers/comments/getCommentById')
const getComments = require('./controllers/comments/getComments')

const getPhotoById = require("./controllers/photos/getPhotoById");

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
  getUserProfileById,
} = require('./controllers/users')
const editUser = require('./controllers/users/editUser')
const {generateError} = require('./helpers')
const {validateAuth} = require('./middlewares')

const app = express();
app.use(cors({origin:["http://localhost:3000", "www.mi-otro-frontend.com"]}));

app.use(fileUpload())
app.use(express.json())

app.get('/photos', getPhotos)
app.get("/photos/:photoId", getPhotoById);
app.post('/posts', validateAuth, createPhotos)
app.get('/feed', selectLastPublications)

app.post('/newuser', registerUser)

app.get('/userprofile/:id', getUserProfileById)
app.patch('/users/:idUser', validateAuth, editUser)
app.post('/login', loginUser)

app.post('/likephoto/:photo_id', validateAuth, Like)

app.get('/comments', getComments)
app.get('/comments/:commentId', getCommentById)
app.post('/comments/:photoId', validateAuth, createComment)

app.use((req, res, next) => {
  throw generateError(
    'This route is not correct, o method of your route is not a correct , please check all you data carefully'
  )
})
app.use((error, req, res, next) => {
  console.error(error)
  res.statusCode = error.statusCode || 500
  res.send({status: 'error', message: error.message})
})
app.listen(5000, () => {
  console.log(`Server listening on http://localhost:${5000}`)
})

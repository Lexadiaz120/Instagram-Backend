const insertComment = require('../../repositories/comments/insertComment')
const {selectUserById} = require('../../repositories/users')
const createComment = async (req, res, next) => {
  try {
    const user_id = req.auth.id
    const {comment} = req.body
    const {photoId} = req.params
    let user = await selectUserById(user_id)
    let {username, avatar} = user
    const insertId = await insertComment({comment, user_id, photoId})
    res.status(201).send({
      status: 'ok',
      data: {id: insertId, comment, user_id, photoId, username, avatar},
    })
  } catch (error) {
    next(error)
  }
}

module.exports = createComment

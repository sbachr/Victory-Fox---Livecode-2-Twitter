const Comment = require('../models/comment')


module.exports = {

  create: (req, res) => {
    Comment.create({
      comment: req.body.comment,
      status: req.status.id
    })
      .then(response => {
        res.status(200).json({
          msg: `Comment has been create`,
          response
        })
      })
      .catch(err => {
        res.status(500).json({
          error: err.message
        })
      })
  },

  getAllComment : (req,res) => {
    Comment.find()
    .then(response => {
        res.status(200).json({
            response
        })
    })
    .catch(err => {
        res.status(500).json({
            err
        })
    })
}
}
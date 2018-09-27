const Timeline = require('../models/timeline')


module.exports = {

  create: (req, res) => {
    // let userId = req.params.id
    Timeline.create({
      status: req.body.timeline,
      userId: req.params.id
    })
      .then(response => {
        res.status(200).json({
          msg: `Timeline has been create`,
          response
        })
      })
      .catch(err => {
        res.status(500).json({
          error: err.message
        })
      })
  },

  remove: (req, res) => {

    Timeline.findOneAndRemove({ _id: req.params.id })
      .then(response => {
        res.status(200).json({
          msg: `Timeline ha been removed`,
          data: response
        })
      })
      .catch(err => {
        res.status(500).json({
          error: err.message
        })
      })
  },

  getAllTimeline: (req, res) => {
    Timeline.find()
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
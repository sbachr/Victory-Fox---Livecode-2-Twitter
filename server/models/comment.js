const mongoose = require('mongoose')
const Schema = mongoose.Schema


const commentSchema = new Schema({
    comment: String,
    statusId: [{ type: Schema.Types.ObjectId, ref: 'User' }]
}, { timestamp: true })


const Comment = mongoose.model('comment', commentSchema)
module.exports = Comment
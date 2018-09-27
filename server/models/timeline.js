const mongoose = require('mongoose')
const Schema = mongoose.Schema


const timelineSchema = new Schema({
    status: String,
    userId: [{ type: Schema.Types.ObjectId, ref: 'User' }]
}, { timestamp: true })


const Timeline = mongoose.model('Timeline', timelineSchema)
module.exports = Timeline
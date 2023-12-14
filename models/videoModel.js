const mongoose = require('mongoose')

const videoSchema = mongoose.Schema({
    video: String,
    name: String
})

const videoModel = mongoose.model("Video", videoSchema)

module.exports = videoModel
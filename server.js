const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const videoModel = require('./models/videoModel')

const app = express();
app.use(express.json())
app.use(cors())

app.get("/videos", async (req, res) => {
    try {
        const videos = await videoModel.find({})
        res.json(videos)
    } catch (error) {
        res.json({error: error.message})
    }
})


mongoose.set("strictQuery", false)
mongoose.
connect('mongodb+srv://admin:admin@mydatabase.6uvz0xd.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
    console.log('connected to MongoDB')
    app.listen(3002, () => {
        console.log("Node API app listening on port 3002 ..."); 
    })
}).catch((error) => {
    console.log(error)
})
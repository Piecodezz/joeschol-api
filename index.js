//Route Imports
const lessonRoute = require("./routes/Lessons")
const subjectRoute = require("./routes/Subjects")
const questionRoute = require("./routes/Questions")


//Create the express app
const express = require('express')
const app = express()

//Dotenv stuff
const dotenv = require("dotenv")
dotenv.config()
app.use(express.json());
//Mongoose Stuff  
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI).then(console.log('connected to mongo')).catch((err)=>(console.log(err)))

//CORS shit
const cors = require('cors')
app.use(cors())

app.use("/api/lessons/", lessonRoute)
app.use("/api/subjects/", subjectRoute )
app.use("/api/questions/", questionRoute )


app.listen("5000",() => {
    console.log("back is running")
}) 

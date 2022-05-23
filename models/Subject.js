const mongoose = require('mongoose')


const subjectSchema = new mongoose.Schema({
    name:{
        type:String,
        unique:true,
    },
    desc:{
        type:String,
        required:true
    },
    pp:{
        type:String,

    }
},{timestamps: true})

module.exports = mongoose.model("Subject", subjectSchema)

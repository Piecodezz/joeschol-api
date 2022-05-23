const mongoose = require('mongoose')


const questionSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    q1: {
        type: String,
        required: true
    },
    q2:{
        type:String,
        required:String
    },
    
    q3:{
        type:String,
        required:String
    },

    q4:{
        type:String,
        required:String
    },
    lesub:{
        type:String,
        required:true,
    },
    pp:{
        type:String,

    },
    corQ: {
        type: String,
        required: true
    }
},{timestamps: true})

module.exports = mongoose.model("Question", questionSchema)

const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:Number,
    details:{
        type:String,
        enum:['student','working','retired'],
        required:true
    },
    phone:Number,
    email:{
        type:String,
        unique:true,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
})


const person = mongoose.model('person', personSchema);

module.exports = person;
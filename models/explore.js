const mongoose = require('mongoose');

const exploreSchema = new mongoose.Schema({
    machineName:{
        type:String,
        required:true,
        enum:['bike','car','bus']
    },
    price:{
        type:Number,
        required:true
    },
    shoes:{
        type:Boolean,
        required:true
    }

})

const explore = mongoose.model('explore', exploreSchema);

module.exports = explore;
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Resort');

const db = mongoose.connection;

db.on('connected', ()=>{
    console.log('MongoDB is connected');
})
db.on('disconnected', ()=>{
    console.log('MongoDB is disconnected');
})

db.on('error', (err)=>{
    console.log('MongoDB connection is error:', err);
})

module.exports = db;
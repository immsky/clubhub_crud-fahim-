const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    EVENT_NAME:{
        type:String,
        required:true
    },
    Club_Name :{
        type:String,
        required:true,
        unique:true
    },
    WRITEEVENTDETAIL:{
        type:String,
        required:true

    },
    VENUE:{
        type:String,
        required:true
    },
    CAPACITY:{
        type:String,
        required:true
    },
     
    TIME:{
        type:String,
        required:true
    },
    
    DATE:{
        type:String,
        required:true

    }



})

const Userdb=mongoose.model('userdbs',schema);

module.exports= Userdb;


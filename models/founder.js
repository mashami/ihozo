const mongoose = require("mongoose")

const FounderSchema = new mongoose.Schema({
       names:{
        type:String,
        required:true
       },
       Document_number:{
        type:String,
        required:true
       },
       Document_type:{
        type:String,
        required:true
       },
       Document_owner:{
        type:String,
        required:true
       },
       Location:{
        type:String,
        required:true
       },
       Phone_number:{
        type:String,
        required:true
       },
       Email:{
        type:String,
        required:true
       },
    }, 
    { timestamps: true }
    );

        module.exports = mongoose.model ("Founder", FounderSchema);
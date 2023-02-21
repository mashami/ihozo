const mongoose = require("mongoose")

const EntrySchema = new mongoose.Schema({
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
       Location_issued:{
        type:String,
        required:false
       },
       Phone_number:{
        type:String,
        required:true
       },
       Email:{
        type:String,
        required:false
       },
    }, 
    { timestamps: true }
    );

        module.exports = mongoose.model("Entry", EntrySchema);
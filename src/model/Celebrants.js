const mongoose = require("mongoose");
const Schema = mongoose.Schema

const celebrantModel = new Schema({
    name:{type:String, required:true},
    birthdayDate:{type:Date, required:true},
    formattedBirthdayDate:{type:String, required:true}
})

module.exports  = mongoose.model("Celebrants", celebrantModel);
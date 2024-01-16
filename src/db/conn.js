const mongoose = require("mongoose");
const MONGODB_URI = "mongodb+srv://Fidel_Wole:2ql24UoUi4uN5302@cluster0.cwzz5uc.mongodb.net/birtdayApp";

async function connectDB(){
    try{
const connect = await mongoose.connect(MONGODB_URI)
if(connect){
    console.log("DB connected")
}
    }catch(error){
        console.log(error)
    }
}
module.exports ={
    connectDB
}

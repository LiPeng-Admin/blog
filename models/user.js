const mongoose=require("mongoose")

const Schema=mongoose.Schema

mongoose.connect("mongodb://localhost:27017/itcast")

const userSchema=new Schema({

})

module.exports=mongoose.model("User",userSchema)
const mongoose=require('mongoose')

const Msg_schema=mongoose.Schema({
    name:String,
    email:String,
    msg:String
})

module.exports=mongoose.model("Messages",Msg_schema);


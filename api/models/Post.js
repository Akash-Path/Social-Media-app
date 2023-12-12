const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema(
{
  userId:{
    type:String,
    required:true
  }  ,
  username:{
    type:String,
    required:true
  }  ,
  profilePicture:{
    type:String,
    default:""
},
  desc:{
    type:String,
    max:500
  },
  img:{
    type:String
  },
  likes:{
    type:Array,
    default:[]
  }
},
{timestamps:true}
)

module.exports = mongoose.model("Post", PostSchema)
const mongoose= require('mongoose');
const Users= new mongoose.Schema({
    username : {
        type:String,
        required:true,
        minlength:5,
        trim:true
    },
},
{timestamps:true}
);

module.exports=mongoose.model("Users", Users);
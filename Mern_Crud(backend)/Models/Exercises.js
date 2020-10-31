const mongoose=require('mongoose');
const Exercises=new mongoose.Schema({
    username: {
        type:String,
        require:true,
    },
    description: {
        type:String,
        require:true,
    },
    duration: {
        type:Number,
        require:true,
    },
    date: {
        type:Date,
        
    }
},
{
    timestamps:true
});
module.exports=mongoose.model("Exercises",Exercises);
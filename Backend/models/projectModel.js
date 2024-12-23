
import mongoose from 'mongoose';

const projectSchema = mongoose.Schema({
    creatorId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    projectHed:{
        type:String,
        required:true
    },
    projectDes:{
        type:String,
        required:true
    },
    investors:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        default:[]
    }],
    projectPic:{
        type:String,
        required:true
    },
    fundtobeRaised:{
        type:Number,
        required:true
    },
    fundRaised:{
        type:Number,
        required:true,
        default:0
    }
    
})


module.exports = mongoose.model('project',projectSchema);
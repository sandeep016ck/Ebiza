

import mongoose from 'mongoose';

const userSchema =mongoose.Schema({
    username:{
        type:String,
        required:[true,"mandatory to enter"]
    },
    email:{
        type:String,
        required:[true,"to be entered"],
        unique:[true,"should be unique"]
    },
    phone:{
        type:Number,
        required:[true,"to be entered"]
    },
    password:{
        type:String,
        required:[true,"password is mandatory"]
    },
    typeOfuser:{
        type:String,
        enum:['creator,investor'],
        required:true,
        default:'creator'
    },
    profilePic:{
        type:String,
        required:true
    },
    projects:{
        type:Array,
        required:true,
        default:[]
    } 
})


function generateInitials(username) {
    const names = username.split(' ');
    const initials = names.map(name => name.charAt(0).toUpperCase()).join('');
    return initials;
}
  
userSchema.pre('save', async function(next) {
    const initials = generateInitials(this.username);
    const color = '#' + Math.floor(Math.random()*16777215).toString(16); // Generate random color
    this.profilePic = `https://ui-avatars.com/api/?name=${initials}&background=${color}&color=fff`; 
    next();
});


module.exports = mongoose.model('user',userSchema)
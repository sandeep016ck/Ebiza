import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Mandatory to enter"]
    },
    email: {
        type: String,
        required: [true, "To be entered"],
        unique: [true, "Should be unique"],
        match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"]
    },
    phone: {
        type: Number,
        required: [true, "To be entered"]
    },
    password: {
        type: String,
        required: [true, "Password is mandatory"]
    },
    typeOfuser: {
        type: String,
        enum: ['creator', 'investor'],
        default: 'creator'
    },
    profilePic: {
        type: String
    },
    projects: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'project' }],
        default: []
    }
});

function generateInitials(username) {
    const names = username.trim().split(/\s+/);
    const initials = names.map(name => name.charAt(0).toUpperCase()).join('').slice(0, 2);
    return initials || 'U';
}

userSchema.pre('save', async function (next) {
    try {
        const initials = generateInitials(this.username);
        const color = Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
        this.profilePic = `https://ui-avatars.com/api/?name=${encodeURIComponent(initials)}&background=${encodeURIComponent(color)}&color=fff`;
        next();
    } catch (error) {
        next(error);
    }
});

export default mongoose.model('user', userSchema);

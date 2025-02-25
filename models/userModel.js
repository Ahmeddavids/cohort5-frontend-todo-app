const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: true
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    todo: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Todo'
    }],
}, { timestamps: true });


const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;


const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {type: String,required: true},
    lastName: {type: String,required: true},
    email: {type: String,required:true},
    password: {type: String,required: true},
    phone: {type: String,default:''},
    interests: {type: String,default:''},
    //address: {type: mongoose.Schema.Types.ObjectId,ref: 'Address',required:false},   
    address: {
        street: {type: String,default: ''},
        city: {type: String,default: ''},
        state: {type: String,default: ''},    
        zip :{type: String,default: ''}
    },     
    profilePic:{type:String,default:"http://localhost:3000/public/uploads/profilePic.png"},
    isAdmin: {type: Boolean,default: false},
    dateCreated: {type: Date,default: Date.now}    
});

userSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

userSchema.set('toJSON', {
    virtuals: true,
});

exports.User = mongoose.model('User', userSchema);
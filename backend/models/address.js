const mongoose = require('mongoose');

const addressSchema = mongoose.Schema({
    street: {
        type: String,
        default: ''
    },
    city: {
        type: String,
        default: ''
    },
    state: {
        type: String,
        default: ''
    },    
    zip :{
        type: String,
        default: ''
    }

})


addressSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

addressSchema.set('toJSON', {
    virtuals: true,
});

exports.Category = mongoose.model('Address', addressSchema);

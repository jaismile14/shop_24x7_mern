const mongoose = require('mongoose');

const orderItemSchema = mongoose.Schema({
    product: {type: mongoose.Schema.Types.ObjectId,ref: 'Product'},
    quantity: {type: Number,required: true},
    dateCreated: {type: Date,default: Date.now}    
})

exports.OrderItem = mongoose.model('OrderItem', orderItemSchema);


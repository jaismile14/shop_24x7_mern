const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {type: String,required: true},
    category:{type: mongoose.Schema.Types.ObjectId,ref: 'Category',required:true}, 
    price : {type: Number,default:0},
    discountprice : {type: Number,default:0},
    image: {type: String,default: ''},
    description: {type: String,default:''},
    isTopProduct: {type: Boolean,default: false},
    dateCreated: {type: Date,default: Date.now}
})

productSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

productSchema.set('toJSON', {
    virtuals: true,
});

exports.Product = mongoose.model('Product', productSchema);
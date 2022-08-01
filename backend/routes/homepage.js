const {Category} = require('../models/category');
const {Product} = require('../models/product');
const express = require('express');
const router = express.Router();

//list of 3 randomly selected categories.
router.get(`/categories/:count`, async (req, res) =>{
    const count = req.params.count ? req.params.count : 3;
    const categoryList = await Category.find().limit(+count);

    if(!categoryList) {
        res.status(500).json({success: false})
    } 
    res.status(200).send(categoryList);
})

//list of 8 randomly products categories.
router.get(`/products/:count`, async (req, res) => {
    const count = req.params.count ? req.params.count : 8;
    const products = await Product.find({ isTopProduct: true }).limit(+count);

    if (!products) {
        res.status(500).json({ success: false });
    }
    res.send(products);
});


module.exports =router;
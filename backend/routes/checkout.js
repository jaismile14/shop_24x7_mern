const { Product } = require('../models/product');
const { Cart } = require('../models/cart');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

//Add Product to Cart 

router.post(`/`, async (req, res) => {
    const category = await Product.findById(req.body.category);
    if (!category) return res.status(400).send('Invalid Category');

    let cart = new Cart({
        name: req.body.name,
        category: req.body.category,
        price: req.body.price,
        discountprice: req.body.discountprice,        
        description: req.body.description,
        isTopProduct: req.body.isTopProduct
    });

    cart = await cart.save();
    if (!cart) return res.status(500).send('The cart cannot be saved.');
    res.send(cart);
});

//Update Product
//router.put('/:id', uploadOptions.single('image'), async (req, res) => {
router.put('/products/:id', async (req, res) => {
    if (!mongoose.isValidObjectId(req.params.id)) {
        return res.status(400).send('Invalid Product Id');
    }
    const category = await Category.findById(req.body.category);
    if (!category) return res.status(400).send('Invalid Category');

    const product = await Product.findById(req.params.id);
    if (!product) return res.status(400).send('Invalid Product!');

    // const file = req.file;
    // let imagepath;

    // if (file) {
    //     const fileName = file.filename;
    //     const basePath = `${req.protocol}://${req.get('host')}/public/uploads/`;
    //     imagepath = `${basePath}${fileName}`;
    // } else {
    //     imagepath = product.image;
    // }

    const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name,
            category: req.body.category,
            price: req.body.price,
            discountprice: req.body.discountprice,
            image: req.body.image,
            description: req.body.description,
            isTopProduct: req.body.isTopProduct
        },
        { new: true }
    );

    if (!updatedProduct) return res.status(500).send('the product cannot be updated!');

    res.send(updatedProduct);
});

router.delete('/products/:id', (req, res) => {
    Product.findByIdAndRemove(req.params.id)
        .then((product) => {
            if (product) {
                return res.status(200).json({
                    success: true,
                    message: 'the product is deleted!'
                });
            } else {
                return res.status(404).json({ success: false, message: 'product not found!' });
            }
        })
        .catch((err) => {
            return res.status(500).json({ success: false, error: err });
        });
});

router.get(`/products/get/count`, async (req, res) => {
    const productCount = await Product.countDocuments((count) => count);

    if (!productCount) {
        res.status(500).json({ success: false });
    }
    res.send({
        productCount: productCount
    });
});

router.get(`/products/get/featured/:count`, async (req, res) => {
    const count = req.params.count ? req.params.count : 0;
    const products = await Product.find({ isFeatured: true }).limit(+count);

    if (!products) {
        res.status(500).json({ success: false });
    }
    res.send(products);
});

router.put('/products/gallery-images/:id', uploadOptions.array('images', 10), async (req, res) => {
    if (!mongoose.isValidObjectId(req.params.id)) {
        return res.status(400).send('Invalid Product Id');
    }
    const files = req.files;
    let imagesPaths = [];
    const basePath = `${req.protocol}://${req.get('host')}/public/uploads/`;

    if (files) {
        files.map((file) => {
            imagesPaths.push(`${basePath}${file.filename}`);
        });
    }

    const product = await Product.findByIdAndUpdate(
        req.params.id,
        {
            images: imagesPaths
        },
        { new: true }
    );

    if (!product) return res.status(500).send('the gallery cannot be updated!');

    res.send(product);
});

module.exports = router;

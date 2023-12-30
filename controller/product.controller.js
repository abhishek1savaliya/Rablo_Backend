const Product = require('../model/product.model'); 

exports.addProduct = async (req, res) => {
    try {

        const existingProduct = await Product.findOne({ productId: req.body.productId });

        if (existingProduct) {
            return res.status(400).send({ error: 'Product ID already exists.' });
        }

        const product = new Product(req.body);
        await product.save();
        res.status(201).send(product);
    } catch (error) {
        res.status(400).send(error);
    }
};


exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.send(products);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.updateProduct = async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'price', 'featured', 'rating', 'company']; 
    const isValidOperation = updates.every(update => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' });
    }

    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!product) {
            return res.status(404).send();
        }
        res.send(product);
    } catch (error) {
        res.status(400).send(error);
    }
};


exports.deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).send();
        }
        res.send(product);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getFeaturedProducts = async (req, res) => {
    try {
        const featuredProducts = await Product.find({ featured: true });
        res.send(featuredProducts);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getProductsByPrice = async (req, res) => {
    try {
        const products = await Product.find({ price: { $lt: parseFloat(req.params.value) } });
        res.send(products);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getProductsByRating = async (req, res) => {
    try {
        const products = await Product.find({ rating: { $gt: parseFloat(req.params.value) } });
        res.send(products);
    } catch (error) {
        res.status(500).send(error);
    }
};
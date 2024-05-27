import Product from '../models/product.js';

// Controller function to get all products
const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(400).json("Error: " + err);
    }
};

// Controller function to create a new product
const createProduct = async (req, res) => {
    try {
        // Extract product data from request body
        const { name, price, quantity, category } = req.body;

        // Create a new product document
        const newProduct = new Product({
            name,
            price,
            quantity,
            category
        });

        // Save the product to the database
        await newProduct.save();

        res.status(201).json({ message: 'Product created successfully', product: newProduct });
    } catch (error) {
        console.error("Error creating product:", error);
        res.status(500).json({ message: 'Server Error' });
    }
};

export { getProducts, createProduct };

import Product from './models/Product';


const getProduct = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products)
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({ message: 'Server Error' })
    }
}

export default getProduct;

import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
        default: 0, // Default quantity is 0
    },
    category: {
        type: String,
        required: true,
    },
})

const Product = mongoose.model("Order", orderSchema);

export default Product;


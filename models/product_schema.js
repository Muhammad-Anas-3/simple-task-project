import mongoose from 'mongoose';
const { Schema } = mongoose;

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
});

const Product = mongoose.models.Product || mongoose.model('Product', productSchema);
export default Product;

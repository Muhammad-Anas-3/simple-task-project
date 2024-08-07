// utils/dbConnect.js
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

async function dbConnect() {
    try {
        mongoose.connect(MONGODB_URI).then((mongoose) => {
            console.log('connected to db')
        });
    } catch (error) {
        console.log(error)
    }
}

export default dbConnect;

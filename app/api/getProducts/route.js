import dbConnect from '@/db/dbconnect';
import Product from '@/models/product_schema';
import { NextResponse } from 'next/server';

export async function GET(req) {
    await dbConnect();

    try {
        const products = await Product.find({});
        return NextResponse.json(products);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

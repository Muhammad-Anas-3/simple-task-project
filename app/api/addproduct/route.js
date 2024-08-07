import dbConnect from '@/db/dbconnect.js';
import Product from '@/models/product_schema.js';
import { NextResponse } from 'next/server';

export async function POST(req) {
    await dbConnect();

    const { name, price } = await req.json();
    console.log(name, price)

    try {
        const product = await Product.create({ name, price });
        return NextResponse.json({ product });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}
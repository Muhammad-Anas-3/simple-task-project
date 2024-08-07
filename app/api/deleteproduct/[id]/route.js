import dbConnect from '@/db/dbconnect.js';
import Product from '@/models/product_schema.js';
import { NextResponse } from 'next/server';

export async function DELETE(req, { params }) {
    const { id } = params;
    await dbConnect();

    try {
        await Product.findByIdAndDelete(id);
        return NextResponse.json({ message: 'Product deleted successfully' });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

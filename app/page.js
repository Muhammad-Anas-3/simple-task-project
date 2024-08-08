'use client'

import ProductListing from "@/components/ProductListing";
import Link from "next/link";

export default function Home() {

  return (
    <div className="w-[80vw] mx-auto mt-10">
      <div className="text-center">

        <Link href={'/addproducts'} className="py-[5px] px-[10px] bg-blue-500 text-white rounded ">Add New Product</Link>
      </div>
      <div className="mt-4 overflow-auto w-[85%] mx-auto">
        <ProductListing />
      </div>
    </div>
  );
}

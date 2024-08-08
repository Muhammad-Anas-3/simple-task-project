"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const AddProductForm = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const productData = {
      name,
      price,
    };

    try {
      await axios.post("/api/addproduct", productData);
      router.push('/');
      setPrice(0);
      setName("");
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-center items-center font-inter">
        <div className="container pt-12 px-12">
          <h2 className="text-2xl font-semibold">Add Product</h2>
          <div className="input-container flex justify-between items-end gap-2 mt-6">
            <div className="input flex flex-col flex-grow gap-1">
              <label htmlFor="name" className="text-[18px] font-medium">
                Product Name
              </label>
              <input
                type="text"
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g Laptop"
                className="rounded-[4px] pl-3 pr-2 py-2 border-[1px] border-black flex-grow"
              />
              <label htmlFor="price" className="text-[18px] font-medium">
                Product Price
              </label>
              <input
                type="number"
                required
                id="price"
                min={0}
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="rounded-[4px] pl-3 pr-2 py-2 border-[1px] border-black flex-grow"
              />
            </div>
          </div>
          <button
            type="submit"
            className="py-[10px] mt-5 px-4 bg-[#1061C4] text-white rounded-[4px]"
          >
            Add Product
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddProductForm;

"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

const ProductListing = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const products = await axios.get("/api/getProducts");
      setProducts(products.data);
    } catch (error) {
      console.error("Cannot fetch products from DB:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const deleteProduct = async (id) => {
    const confirmDelete = window.confirm("Do you want to delete this product?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`/api/deleteproduct/${id}`);
      await fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div>
      {products.length === 0 ? (
        <div className="text-center py-4">
          <p className="text-lg font-semibold">
            We have no products. Please add a product.
          </p>
        </div>
      ) : (
        <>
          <h1 className="text-2xl text-center my-4">
            We Have following existing Products in database
          </h1>
          <table className="w-full text-left table-auto border-collapse border border-gray-300 mb-10">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">
                  Product Name
                </th>
                <th className="border border-gray-300 px-4 py-2">Price</th>
                <th className="border border-gray-300 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td className="border border-gray-300 px-4 py-2">
                    {product.name}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    ${product.price}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button
                      onClick={() => deleteProduct(product._id)}
                      className="py-[5px] px-[10px] bg-red-500 text-white rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default ProductListing;

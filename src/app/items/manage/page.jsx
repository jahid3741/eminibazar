"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ManageProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const res = await fetch("/api/products");
      const data = await res.json();

      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = confirm(
      "Are you sure you want to delete this product?",
    );

    if (!confirmDelete) return;

    try {
      const res = await fetch(`/api/products/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (data) {
        fetchProducts();
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return <div className="text-center py-20">Loading Products...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-8">Manage Products</h1>

      <div className="overflow-x-auto rounded-xl border">
        <table className="w-full">
          <thead className="bg-green-600 text-white">
            <tr>
              <th className="p-4 text-left">Image</th>

              <th className="p-4 text-left">Product</th>

              <th className="p-4 text-left">Category</th>

              <th className="p-4 text-left">Price</th>

              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr key={product._id} className="border-b hover:bg-gray-50">
                <td className="p-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                </td>

                <td className="p-4 font-medium">{product.title}</td>

                <td className="p-4">{product.category}</td>

                <td className="p-4">৳ {product.price}</td>

                <td className="p-4">
                  <div className="flex justify-center gap-2">
                    <Link
                      href={`/items/${product._id}`}
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                    >
                      View
                    </Link>

                    <Link
                      href={`/items/update/${product._id}`}
                      className="bg-yellow-500 text-white px-4 py-2 rounded-lg"
                    >
                      Update
                    </Link>

                    <button
                      onClick={() => handleDelete(product._id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {products.length === 0 && (
        <div className="text-center py-10">No products found.</div>
      )}
    </div>
  );
}

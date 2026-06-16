"use client";

import { useState } from "react";

export default function AddProductPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const form = e.target;

    const product = {
      title: form.title.value,
      category: form.category.value,
      price: Number(form.price.value),
      image: form.image.value,
      shortDescription: form.shortDescription.value,
      fullDescription: form.fullDescription.value,
    };

    try {
      const response = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });

      const data = await response.json();

      console.log(data);

      alert("Product added successfully!");

      form.reset();
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Add Product</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="title"
          placeholder="Title"
          className="w-full border p-3 rounded"
        />

        <input
          name="category"
          placeholder="Category"
          className="w-full border p-3 rounded"
        />

        <input
          name="price"
          type="number"
          placeholder="Price"
          className="w-full border p-3 rounded"
        />

        <input
          name="image"
          placeholder="Image URL"
          className="w-full border p-3 rounded"
        />

        <input
          name="shortDescription"
          placeholder="Short Description"
          className="w-full border p-3 rounded"
        />

        <textarea
          name="fullDescription"
          placeholder="Full Description"
          className="w-full border p-3 rounded"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-green-600 text-white px-6 py-3 rounded"
        >
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>
    </div>
  );
}

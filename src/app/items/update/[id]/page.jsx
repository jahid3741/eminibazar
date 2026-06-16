"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function UpdateProductPage() {
  const { id } = useParams();
  const router = useRouter();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/products/${id}`);
        const data = await res.json();

        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const form = e.target;

    const updatedProduct = {
      title: form.title.value,
      category: form.category.value,
      price: Number(form.price.value),
      image: form.image.value,
      shortDescription: form.shortDescription.value,
      fullDescription: form.fullDescription.value,
    };

    try {
      const res = await fetch(`/api/products/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProduct),
      });

      const data = await res.json();

      console.log(data);

      alert("Product Updated Successfully");

      router.push("/items/manage");
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return <div className="text-center py-20">Loading Product...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Update Product</h1>

      <form onSubmit={handleUpdate} className="space-y-4">
        <input
          name="title"
          defaultValue={product?.title}
          className="w-full border p-3 rounded"
          placeholder="Title"
        />

        <input
          name="category"
          defaultValue={product?.category}
          className="w-full border p-3 rounded"
          placeholder="Category"
        />

        <input
          name="price"
          type="number"
          defaultValue={product?.price}
          className="w-full border p-3 rounded"
          placeholder="Price"
        />

        <input
          name="image"
          defaultValue={product?.image}
          className="w-full border p-3 rounded"
          placeholder="Image URL"
        />

        <input
          name="shortDescription"
          defaultValue={product?.shortDescription}
          className="w-full border p-3 rounded"
          placeholder="Short Description"
        />

        <textarea
          name="fullDescription"
          defaultValue={product?.fullDescription}
          className="w-full border p-3 rounded"
          rows={5}
          placeholder="Full Description"
        />

        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700"
        >
          Update Product
        </button>
      </form>
    </div>
  );
}

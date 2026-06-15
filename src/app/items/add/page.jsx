"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function AddProductPage() {
  return (
    <ProtectedRoute>
      <div className="max-w-xl mx-auto py-10">
        <h1 className="text-3xl font-bold mb-6">Add Product</h1>

        <form className="space-y-4">
          <input placeholder="Title" className="w-full border p-3 rounded" />

          <input placeholder="Price" className="w-full border p-3 rounded" />

          <textarea
            placeholder="Description"
            className="w-full border p-3 rounded"
          />

          <button className="bg-green-600 text-white px-6 py-3 rounded">
            Add Product
          </button>
        </form>
      </div>
    </ProtectedRoute>
  );
}

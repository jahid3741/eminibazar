"use client";

import ProtectedRoute from "@/components/ProtectedRoute";
import { plants } from "@/data/plants";

export default function ManagePage() {
  return (
    <ProtectedRoute>
      <div className="max-w-6xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-8">Manage Products</h1>

        <div className="overflow-x-auto">
          <table className="table-auto w-full border">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3">Plant</th>
                <th className="p-3">Category</th>
                <th className="p-3">Price</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>

            <tbody>
              {plants.map((plant) => (
                <tr key={plant.id} className="border-t">
                  <td className="p-3">{plant.title}</td>

                  <td className="p-3">{plant.category}</td>

                  <td className="p-3">৳{plant.price}</td>

                  <td className="p-3 flex gap-2">
                    <button className="bg-blue-500 text-white px-3 py-1 rounded">
                      View
                    </button>

                    <button className="bg-red-500 text-white px-3 py-1 rounded">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </ProtectedRoute>
  );
}

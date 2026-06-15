"use client";

import { useState } from "react";
import { plants } from "@/data/plants";
import ProductCard from "@/components/ProductCard";

export default function ItemsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [priceFilter, setPriceFilter] = useState("");

  const filteredPlants = plants.filter((plant) => {
    const matchesSearch = plant.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory = category === "" || plant.category === category;

    const matchesPrice =
      priceFilter === ""
        ? true
        : priceFilter === "low"
          ? plant.price < 400
          : plant.price >= 400;

    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-8">All Plants</h1>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <input
          type="text"
          placeholder="Search plants..."
          className="border p-3 rounded-lg flex-1"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border p-3 rounded-lg"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Indoor">Indoor</option>
          <option value="Outdoor">Outdoor</option>
          <option value="Flower">Flower</option>
          <option value="Fruit">Fruit</option>
          <option value="Office">Office</option>
        </select>

        <select
          className="border p-3 rounded-lg"
          value={priceFilter}
          onChange={(e) => setPriceFilter(e.target.value)}
        >
          <option value="">All Prices</option>
          <option value="low">Below 400</option>
          <option value="high">Above 400</option>
        </select>
      </div>

      {filteredPlants.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-lg text-gray-500">No plants found.</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {filteredPlants.map((plant) => (
            <ProductCard key={plant.id} plant={plant} />
          ))}
        </div>
      )}
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";

export default function ItemsPage() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [priceFilter, setPriceFilter] = useState("");

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      ?.toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory = category === "" || product.category === category;

    const matchesPrice =
      priceFilter === ""
        ? true
        : priceFilter === "low"
          ? product.price < 500
          : product.price >= 500;

    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-8">All Plants</h1>

      <div className="flex gap-4 mb-8 flex-wrap">
        <input
          type="text"
          placeholder="Search plants..."
          className="border p-3 rounded-lg"
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border p-3 rounded-lg"
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
          onChange={(e) => setPriceFilter(e.target.value)}
        >
          <option value="">All Prices</option>
          <option value="low">Below 500</option>
          <option value="high">Above 500</option>
        </select>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product._id} plant={product} />
        ))}
      </div>
    </div>
  );
}

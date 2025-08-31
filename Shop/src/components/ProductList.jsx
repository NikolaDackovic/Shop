import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard.jsx";
import { fetchProducts } from "../api/products.js";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
      setFilteredProducts(data);
    });
  }, []);

  useEffect(() => {
    let results = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    results.sort((a, b) => (sortOrder === "asc" ? a.price - b.price : b.price - a.price));
    setFilteredProducts(results);
  }, [searchTerm, sortOrder, products]);

  return (
    <div>
      <div className="controls">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}>
          Sort by Price ({sortOrder === "asc" ? "Low to High" : "High to Low"})
        </button>
      </div>
      <div className="product-list">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
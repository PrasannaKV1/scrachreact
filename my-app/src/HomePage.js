import React, { useState, useEffect } from "react";
import ProductList from "../components/ProductList";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products here
    setProducts([
      { id: 1, name: "Product A", price: 100 },
      { id: 2, name: "Product B", price: 200 },
    ]);
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <ProductList products={products} />
    </div>
  );
};

export default HomePage;

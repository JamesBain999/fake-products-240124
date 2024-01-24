// src/App.jsx

import React, { useEffect, useState } from "react";
import ProductService from "./ProductService";
import ProductList from "./ProductList";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productService = new ProductService();
    productService.getProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <div>
      <h1>Fake React E-Commerce</h1>
      <ProductList products={products} />
    </div>
  );
}

export default App;
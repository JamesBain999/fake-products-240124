// src/ProductList.jsx

import React from "react";
import ProductListItem from "./ProductListItem";

function ProductList({ products }) {
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <ProductListItem key={product._id} product={product} />
        ))}
      </ul>
    </div>
  );
}

export default ProductList;

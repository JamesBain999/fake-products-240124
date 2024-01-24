// src/ProductListItem.jsx

import React from "react";

function ProductListItem({ product }) {
  return (
    <li>
      <div>
        <img
          src={product.image}
          alt={product.title}
          style={{ maxWidth: "100px" }}
        />
      </div>
      <div>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <p>Rating: {product.rating}</p>
      </div>
    </li>
  );
}

export default ProductListItem;

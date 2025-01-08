import React from "react";

const ProductList = ({ products }) => (
  <ul>
    {products.map((product) => (
      <li key={product.id}>
        <strong>{product.name}</strong> - ${product.price}
      </li>
    ))}
  </ul>
);

export default ProductList;
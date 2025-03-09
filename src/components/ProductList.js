import React, { useState } from "react";
import { Link } from "react-router-dom";
import productsData from "../data/products";

function ProductList() {
  const [products] = useState(productsData);

  return (
    <div>
      <h1>Mobile Store</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>
              <h2>{product.name}</h2>
              <p>Price: ${product.price}</p>
            </Link>
          </li>
        ))}
      </ul>
      <Link to="/admin">Go to Admin Panel</Link>
    </div>
  );
}

export default ProductList;

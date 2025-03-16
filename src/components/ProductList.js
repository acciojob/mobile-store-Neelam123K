import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
  }, []);

  return (
    <div>
      <h1>Mobile Store</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>
              <h2>{product.name}</h2>
              <p>Price: ${product.price}</p>
              <img src={product.image} alt={product.name} width="100" />
            </Link>
          </li>
        ))}
      </ul>
      <Link to="/admin">Go to Admin Panel</Link>
    </div>
  );
}

export default ProductList;

// Import necessary hooks, components, and types
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Products from "../../assets/data/products.json";
import { ProductType } from "../../types/index";
import { useCart } from "../../context/index";
import Footer from "../../components/layout/Footer";
import "./Product.css";

const Product: React.FC = () => {
  let { productId } = useParams<{ productId: string }>();
  const [quantity, setQuantity] = useState<number>(1);
  const { addToCart } = useCart(); // Using addToCart from context

  const product = Products.find(
    (p) => parseInt(p.id, 10) === parseInt(productId, 10)
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    alert("Product added!");
  };

  return (
    <>
      <Link
        to="/"
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          textDecoration: "none",
          color: "green",
        }}
      >
        Home
      </Link>

      <img src={product.image} alt={product.name} className="product-image" />
      <div className="prduct-info">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>

        <label>Quantity: </label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
          min="1"
          max={product.stock}
        />

        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
      <Footer />
    </>
  );
};

export default Product;

import React from "react";
import { useCart } from "../../context/index";
import { ProductType } from "../../types/index";
import Header from "../../components/layout/Header";
import "./cart.css";
import Footer from "../../components/layout/Footer";

interface CartProductType extends ProductType {
  quantity: number;
}
const Cart: React.FC = () => {
  const { cart } = useCart();
  const totalPrice = cart.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);

  return (
    <>
      <div className="cart-page">
        <h2 className="check-out">Check out</h2>
        <div className="test">
          <ul>
            {cart.map((product: CartProductType) => (
              <li className="list" key={product.id}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
                <h3>{product.name}</h3>
                <p>Quantity: {product.quantity}</p>
                <p>Price: ${product.price}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="total">
          <h3 className="total">Total: ${totalPrice}</h3>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default Cart;

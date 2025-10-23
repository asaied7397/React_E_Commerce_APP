import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
  const { All_Products, cartItems, removeFromCart } = useContext(ShopContext);
  //   if (!cartItems) {
  //     console.log(cartItems);
  //     return <p>Loading...........</p>;
  //   }
  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {All_Products.map((e) => {
        const quantity = Number(cartItems[e.id]) || 0;
        if (quantity > 0) {
          //   console.log(quantity);
          //   console.log(e.new_price);
          //   console.log(cartItems[e.id]);
          return (
            <div key={e.id}>
              <div className="cartitems-format cartitems-format-main">
                <img className="carticon-product-icon" src={e.image} alt="" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cartitems-quantity">{quantity}</button>
                <p>${e.new_price * quantity}</p>
                <img
                  className="cartitems-remove-icon"
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        } else {
          return null;
        }
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>
                $
                {All_Products.reduce((accumulator, product) => {
                  if (Number(cartItems[product.id]) > 0) {
                    const productTotal =
                      product.new_price * Number(cartItems[product.id]);
                    return accumulator + productTotal;
                  }
                  return accumulator;
                }, 0)}
              </p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>
                $
                {All_Products.reduce((accumulator, product) => {
                  if (Number(cartItems[product.id]) > 0) {
                    const productTotal =
                      product.new_price * Number(cartItems[product.id]);
                    return accumulator + productTotal;
                  }
                  return accumulator;
                }, 0)}
              </h3>
            </div>
          </div>
          <button>Proceed To Checkout</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have any PROMO Code Enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="PromoCode" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;

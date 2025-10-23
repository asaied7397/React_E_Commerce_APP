import { createContext, useState } from "react";
import All_Products from "../Components/Assets/all_product.js";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  All_Products.map((e) => {
    cart[e.id] = 0;
    return cart;
  });
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  // console.log(cartItems);
  const addToCart = (itemId) => {
    setCartItems(
      (previous) => ({
        ...previous,
        [itemId]: +previous[itemId] + 1,
      })
      // console.log(cartItems)
    );
  };
  // useEffect(() => {
  //   console.log(cartItems);
  // }, [cartItems]);

  const removeFromCart = (itemId) => {
    setCartItems((previous) => ({
      ...previous,
      [itemId]: previous[itemId] - 1,
    }));
  };

  const ContextValue = { All_Products, cartItems, addToCart, removeFromCart };

  return (
    <ShopContext.Provider value={ContextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;

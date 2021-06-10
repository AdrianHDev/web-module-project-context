import React, { createContext, useContext, useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import ProductContext from "./contexts/ProductContext";
import CartContext from "./contexts/CartContext";
import useCart from "./hooks/useCart";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useCart([]);

  const addItem = (item) => {
    setCart([...cart, item]);
  };

  const removeItem = (ev) => {
    console.log(ev.target.value, "and", cart);
    setCart([
      ...cart.filter((item) => Number(item.id) !== Number(ev.target.value)),
    ]);
  };

  return (
    <ProductContext.Provider value={{ products, addItem }}>
      <CartContext.Provider value={{ cart, removeItem }}>
        <div className="App">
          <Navigation cart={cart} />

          {/* Routes */}
          <Route exact path="/">
            <Products />
          </Route>

          <Route path="/cart">
            <ShoppingCart />
          </Route>
        </div>
      </CartContext.Provider>
    </ProductContext.Provider>
  );
}

export default App;

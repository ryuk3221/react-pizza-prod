import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./scss/app.scss";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";

export const AppContext = createContext();

function App() {
  //Состояние со значением инпута поиска
  const [searchValue, setSearchValue] = useState("");
  //Состояние элементов корзины
  const [cartItems, setCartItems] = useState([]);
  
  return (
    <div className="wrapper">
      <AppContext.Provider value={{searchValue, setSearchValue, cartItems, setCartItems}}>
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route
                path="/"
                element={
                  <Home setCartItems={setCartItems} cartItems={cartItems}/>
                }
              />
              <Route
                path="/cart"
                element={
                  <Cart cartItems={cartItems} setCartItems={setCartItems} />
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;

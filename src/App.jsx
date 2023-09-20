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
  

  // const count = useSelector((state) => state.counter.count);
  // const dispatch = useDispatch();

  return (
    <div className="wrapper">
      <AppContext.Provider
        value={{ searchValue, setSearchValue }}
      >
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route
                path="/"
                element={
                  <Home  />
                }
              />
              <Route
                path="/cart"
                element={
                  <Cart  />
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

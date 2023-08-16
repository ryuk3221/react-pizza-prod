import React, { useEffect, useState } from "react";
import "./scss/app.scss";
import Header from "./components/Header/Header";
import Categories from "./components/Categories/Categories";
import Sort from "./components/Sort/Sort";
import PizzaBlock from "./components/PizzaBlock/PizzaBlock";
import pizzas from './assets/pizza.json';

function App() {
  //Состояние элементов каталога (пиццы)
  const [catalogItems, setCatalogItems] = useState([]);

  //Вызываю 1раз при первичном рендеринге
  useEffect(() => {
    //Обьявляю функцию которвя получает данные с бэка
    const getCatalogItems = async () => {
      const items =  await fetch('https://648b792b17f1536d65eafd99.mockapi.io/catalog');
      const itemsData = await items.json();
      //Обновляю состояние
      setCatalogItems(itemsData);
    }
    getCatalogItems();
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
           
           {
            catalogItems.map(obj => (
              <PizzaBlock {...obj} key={obj.id}/>
            ))
           }
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

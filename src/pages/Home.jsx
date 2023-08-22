import { useState, useEffect } from "react";
import SkeletonPizza from "../components/SkeletonBlock.jsx";
import Categories from "../components/Categories/Categories";
import Sort from "../components/Sort/Sort";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";

const Home = () => {
  //Состояние элементов каталога (пиццы)
  const [catalogItems, setCatalogItems] = useState();
  //Состояние загрузки карточек с пицами
  const [isLoading, setIsLoading] = useState(true);

  //Вызываю 1раз при первичном рендеринге
  useEffect(() => {
    //Обьявляю функцию которвя получает данные с бэка
    const getCatalogItems = async () => {
      const items = await fetch(
        "https://648b792b17f1536d65eafd99.mockapi.io/catalog"
      );
      const itemsData = await items.json();
      setIsLoading(false);
      //Обновляю состояние
      setCatalogItems(itemsData);
    };
    getCatalogItems();
  }, []);

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {
          // catalogItems.map(obj => (isLoading ? <SkeletonPizza /> : <PizzaBlock {...obj} key={obj.id}/>))
          isLoading
            ? [...Array(6)].map((obj, index) => <SkeletonPizza key={index} />)
            : catalogItems.map((obj) => <PizzaBlock {...obj} key={obj.id} />)
        }
      </div>
    </>
  );
};

export default Home;

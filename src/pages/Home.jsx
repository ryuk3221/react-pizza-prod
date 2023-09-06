import { useState, useEffect } from "react";
import SkeletonPizza from "../components/SkeletonBlock.jsx";
import Categories from "../components/Categories/Categories";
import Sort from "../components/Sort/Sort";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";


const categories = [
  'Все',
  'Мясные',
  'Вегетарианские',
  'Гриль',
  'Острые',
  'Закрытые'
];

const sortTitles = [
  'rating asc',
  'rating desc',
  'price asc',
  'price desc',
  'title asc',
  'title desc'
];

 

const Home = ({searchValue}) => {
  //Состояние элементов каталога (пиццы)
  const [catalogItems, setCatalogItems] = useState();
  //Состояние загрузки карточек с пицами
  const [isLoading, setIsLoading] = useState(true);
  //Состояние активного элемента категорий (индекс)
  const [activeIndexCategories, setActiveIndexCategories] = useState(0);
  //Состояние активного элемента сортировки (индекс)
  const [activeIndexSort, setActiveIndexSort] = useState(1);
  //Состояние активного селекта, по умолчанию первый активный
  const [selectedSortItem, setSelectedSortItem] = useState(0);

  //Вызываю 1раз при первичном рендеринге
  useEffect(() => {
    const sortParam = sortTitles[selectedSortItem].split(' ')[0];
    const sortOrder = sortTitles[selectedSortItem].split(' ')[1];
    setIsLoading(true);
    //Обьявляю функцию которвя получает данные с бэка
    const getCatalogItems = async () => {
      let url = `https://648b792b17f1536d65eafd99.mockapi.io/catalog?category=${activeIndexCategories}&sortBy=${sortParam}&order=${sortOrder}`;
      const items = await fetch(url);
      const itemsData = await items.json();
      setIsLoading(false);
      //Обновляю состояние
      setCatalogItems(itemsData);
    };
    getCatalogItems();
  }, [activeIndexCategories, selectedSortItem]);


  return (
    <>
      <div className="content__top">
        <Categories 
          onChangeActiveCategories={setActiveIndexCategories} 
          activeIndexCategories={activeIndexCategories} 
          categories={categories}
        />
        <Sort 
          selectedSortItem={selectedSortItem}
          setSelectedSortItem={setSelectedSortItem}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {
          // catalogItems.map(obj => (isLoading ? <SkeletonPizza /> : <PizzaBlock {...obj} key={obj.id}/>))
          isLoading
            ? [...Array(6)].map((obj, index) => <SkeletonPizza key={index} />)
            : catalogItems.filter(obj => obj.title.toUpperCase().includes(searchValue.toUpperCase())).map((obj) => <PizzaBlock {...obj} key={obj.id} />)
            
        }
      </div>
    </>
  );
};

export default Home;

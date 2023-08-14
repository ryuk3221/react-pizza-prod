import { useState } from "react";

const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const categories = [
    'Все',
    'Мясные',
    'Вегетарианские',
    'Гриль',
    'Острые',
    'Закрытые'
  ];

  const handleChangeCategory = (index) => {
    setActiveIndex(index);
  }

  return (
    <div className="categories">
      <ul>
        {categories.map((el, index) => (
          <li onClick={() => handleChangeCategory(index)} className={activeIndex === index ? 'active' : ''} key={index + el}>{el}</li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;

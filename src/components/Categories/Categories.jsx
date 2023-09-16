import { useState } from "react";

const Categories = ({setActiveIndexCategories, activeIndexCategories, categories}) => {

  

  return (
    <div className="categories">
      <ul>
        {categories.map((el, index) => (
          <li onClick={() => setActiveIndexCategories(index)} className={activeIndexCategories === index ? 'active' : ''} key={index + el}>{el}</li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;

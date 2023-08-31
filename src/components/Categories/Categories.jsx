import { useState } from "react";

const Categories = ({onChangeActiveCategories, activeIndexCategories, categories}) => {

  const handleChangeCategory = (index) => {
    onChangeActiveCategories(index);
  }

  return (
    <div className="categories">
      <ul>
        {categories.map((el, index) => (
          <li onClick={() => handleChangeCategory(index)} className={activeIndexCategories === index ? 'active' : ''} key={index + el}>{el}</li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;

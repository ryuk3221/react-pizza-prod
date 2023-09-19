import { useSelector, useDispatch } from "react-redux";
import { setCategoryIndex } from "../../redux/slices/filterSlice";

const Categories = ({ categories }) => {
  const dispatch = useDispatch();
  //Активный индекс категорий
  const activeIndexCategories = useSelector(state => state.filterSliceReducer.categoryIndex);
  const setActiveIndexCategories = (index) => {
    dispatch(setCategoryIndex(index));
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((el, index) => (
          <li onClick={() => setActiveIndexCategories(index)} className={activeIndexCategories == index ? 'active' : ''} key={index + el}>{el}</li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;

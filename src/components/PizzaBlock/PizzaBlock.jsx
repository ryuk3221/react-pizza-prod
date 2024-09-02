import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCartItem } from "../../redux/slices/cartSlice";

const PizzaBlock = ({
  id,
  title,
  price,
  imageUrl,
  sizes,
  types,

}) => {
  // const {cartItems, setCartItems} = useState(AppContext);
  const [changedSize, setChangedSize] = useState(0);
  const [activeType, setActiveType] = useState(0);
  
  const dispatch = useDispatch();

  //Получаю список твоаров корзины
  const { cartItems } = useSelector(state => state.cartReducer);
  
  const findedItem = cartItems.find(item => item.id === id && item.size == sizes[changedSize] && item.type == types[activeType]);
  

  const onClickAdd = () => {
    const item = {
      id,
      title,
      price, 
      imageUrl,
      type: types[activeType],
      size: sizes[changedSize],
      count: 1
    };
    dispatch(addCartItem(item));
  };

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src="https://dodopizza-a.akamaihd.net/static/Img/Products/c24bb8e55baa4ca68945459ac6afdf3e_584x584.jpeg" alt="Pizza" />
      <h4 className="pizza-block__title">{title}</h4>
      <div className="pizza-block__selector">
        <ul>
          {types.map((type, index) => (
            <li
              key={index}
              onClick={() => setActiveType(index)}
              className={activeType === index ? "active" : ""}
            >
              {type}
            </li>
          ))}
        </ul>
        <ul>
          {sizes.map((el, index) => (
            <li
              key={index}
              onClick={() => setChangedSize(index)}
              className={changedSize === index ? "active" : ""}
            >
              {el} см.
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <div
          className="button button--outline button--add"
          onClick={onClickAdd}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          <i>
            {
              findedItem ? findedItem.count : '0'
            }
          </i>
        </div>
      </div>
    </div>
  );
};

export default PizzaBlock;

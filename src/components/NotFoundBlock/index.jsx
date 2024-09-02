import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/pizza-logo.svg";
import styles from "./NotFoundBlock.module.scss";

const NotFoundBlock = () => {
  return (
    <div>
      <h1 className={styles.title}>Ничего не найдено :(</h1>
        <Link to="/">
          <div className="header__logo">
            <img width="38" src={logo} alt="Pizza logo" />
            <div>
              <h1>React Pizza</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
        </Link>
    </div>
  );
};

export default NotFoundBlock;

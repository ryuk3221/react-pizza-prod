import React from "react";
import { Link } from "react-router-dom";
import styles from "./NotFoundBlock.module.scss";

const NotFoundBlock = () => {
  return (
    <div>
      <h1 className={styles.title}>Ничего не найдено :(</h1>
        <Link to="/">
          <div className={styles.button}>Вернуться на главную</div>
        </Link>
    </div>
  );
};

export default NotFoundBlock;

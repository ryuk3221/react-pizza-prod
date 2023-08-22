import React from "react";
import styles from "./NotFoundBlock.module.scss";

const NotFoundBlock = () => {
  return (
    <div>
      <h1 className={styles.title}>Ничего не найдено :(</h1>
      <button className={styles.button}>Вернуться назад</button>
    </div>
  );
};

export default NotFoundBlock;

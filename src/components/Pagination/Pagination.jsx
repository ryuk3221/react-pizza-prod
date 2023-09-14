import styles from './Pagination.module.scss';

const Pagination = ({currentPage, setCurrentPage, catalogItemsLen, pageSize}) => {
  //Генерирую массив чтобы отрендерить ссылки пагинации
  let pagesArr = [...Array(Math.ceil(catalogItemsLen / pageSize))];
  
  const handleNextPage = () => {
    if (currentPage < pagesArr.length) {
      setCurrentPage(currentPage + 1);
    }
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  return ( 
    <div className={styles.parent}>
      <button className={styles.btnArrow} onClick={() => handlePrevPage()}>
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="13" viewBox="0 0 8 13" fill="none">
          <path d="M7.5 0.5L1.5 6.5L7.5 12.5" stroke="#fe5f1e"/>
        </svg>
      </button>
      {
        pagesArr.map((page, index) => (
          <button 
            className={styles.btn + ' ' + (index + 1 == currentPage ? styles.btnActive : '')}
            onClick={() => setCurrentPage(index + 1)}
            key={'btn_id_' + index}
          >
            {index + 1}
          </button>
        ))
      }
      <button className={styles.btnArrow} onClick={() => handleNextPage()}>
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="13" viewBox="0 0 8 13" fill="none">
          <path d="M0.5 12.5L6.5 6.5L0.5 0.5" stroke="#fe5f1e"/>
        </svg>
      </button>
    </div>
   );
}
 
export default Pagination;
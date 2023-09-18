import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import styles from './Search.module.scss';
import { AppContext } from '../../App';
import debounce from 'lodash.debounce';



const Search = () => {
  const [value, setValue] = useState('');
  const {searchValue, setSearchValue} = useContext(AppContext);
  const inputRef = useRef();

  const onClickClear = () => {
    setSearchValue('');
    setValue('');
    inputRef.current.focus();
  }
  const updateSearchValue = useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 400),
    []
  );

  const onChangeInput = event => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  }


  return ( 
    <div className={styles.parent}>
      <svg className={styles.icon} fill='none' height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <circle cx="11" cy="11" r="8"/>
        <line x1="21" x2="16.65" y1="21" y2="16.65"/>
      </svg>
      {value && (
        <button onClick={onClickClear}>
          <svg className={styles.remover}  height="1em" viewBox="0 0 384 512">
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
          </svg>
        </button>
      )}
      <input
        ref={inputRef}
        className={styles.input} 
        type="text" 
        placeholder='Поиск по названию' 
        value={value}
        onChange={onChangeInput}
      />
    </div>
   );
}
 
export default Search;






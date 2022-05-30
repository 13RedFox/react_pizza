import {useCallback, useContext, useRef, useState} from 'react';
import debounce from 'lodash.debounce';
import {SearchContext} from '../../App';
import styles from './Search.module.scss';

const Search = () => {
  const [value, setValue] = useState('')
  const {setSearchValue} = useContext(SearchContext);
  const inputRef = useRef()

  const onClickClear = () => {
    setSearchValue('');
    setValue('')
    inputRef.current.focus();
  }

  const updateSearchValue = useCallback(
    debounce((str) => {
      setSearchValue(str)
    }, 1000),
    [],
  )


  const onChangeInput = event => {
    setValue(event.target.value)
    updateSearchValue(event.target.value)
  }

  return (
    <div className={styles.root}>
      <input
        ref={inputRef}
        className={styles.input}
        placeholder="Поиск пиццы..."
        value={value}
        onChange={onChangeInput}
      />
      {value && (
        <span className={styles.clearIcon} onClick={onClickClear}>
          X
        </span>
      )}
    </div>
  );
};

export default Search;

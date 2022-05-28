import styles from './Search.module.scss';

const Search = ({ searchValue, setSearchValue }) => {
  return (
    <div className={styles.root}>
      <input
        className={styles.input}
        placeholder="Поиск пиццы..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      {searchValue && (
        <span className={styles.clearIcon} onClick={() => setSearchValue('')}>
          X
        </span>
      )}
    </div>
  );
};

export default Search;

const Categories = ({ value, onChangeCategory }) => {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className="categories">
      <ul>
        {[] &&
          categories.map((categoryName, idx) => (
            <li
              className={value === idx ? 'active' : ''}
              key={idx}
              onClick={() => onChangeCategory(idx)}>
              {categoryName}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Categories;

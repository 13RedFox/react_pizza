import { useState } from 'react';

const Categories = () => {
  const [activeIdx, setActiveIndex] = useState(0);

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  const onClickCategory = (idx) => {
    setActiveIndex(idx);
  };

  return (
    <div className="categories">
      <ul>
        {[] &&
          categories.map((item, idx) => (
            <li
              className={activeIdx === idx ? 'active' : ''}
              key={idx}
              onClick={() => onClickCategory(idx)}>
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Categories;

import { useEffect, useState } from 'react';

import Sort from './components/Sort';
import Header from './components/Header';
import Categories from './components/Categories';
import PizzaBlock from './components/PizzaBlock';

import './scss/app.scss';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://628b94df667aea3a3e326e2a.mockapi.io/items')
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
      })
  }, [])



  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {[] && items.map((obj) => (
              <PizzaBlock {...obj} key={obj.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

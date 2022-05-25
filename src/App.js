import { useEffect, useState } from 'react';

import Sort from './components/Sort';
import Header from './components/Header';
import Categories from './components/Categories';
import PizzaBlock from './components/PizzaBlock';
import Skeleton from './components/PizzaBlock/Skeleton';

import './scss/app.scss';

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://628b94df667aea3a3e326e2a.mockapi.io/items')
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        setIsLoading(false);
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
            {
              isLoading
                ? [...new Array(6)].map((_, idx) => <Skeleton key={idx} />)
                : items.map((obj) => <PizzaBlock {...obj} key={obj.id} />)
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

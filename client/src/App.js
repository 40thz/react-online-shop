import React from 'react';
import axios from 'axios'
import { Route, Switch } from 'react-router-dom'
import './App.scss';
import Home from './Components/Home'
import Product from './Components/Product'
import Header from './Components/Header';
// import Footer from './Components/Footer';
import NotFound from './Components/NotFound';

function App() {
  const [items, setItems] = React.useState(null);
  const [sortItems, setSortItems] = React.useState(null);
  const [searchItem, setSearchItem] = React.useState(null);
  const [productId, setProductId] = React.useState(0)

  React.useEffect(() => {
    axios.get('/db.json').then(({ data }) => setItems(data.items))
    axios.get('/db.json').then(({ data }) => setSortItems(data.items))
    axios.get('/db.json').then(({ data }) => setSearchItem(data.items))
    document.title = 'Главная';
  }, [])


  const filterCategory = (category) => {
    if (category === null) {
      setSearchItem(sortItems)
    } else {
      if (sortItems) {
        let filterItem = sortItems.filter((item) => {
          return item.category === category;
        });
        setSearchItem(filterItem)
      }
    }
  }
  console.log(items)
  return (
    <Switch>
      <div className="App">
      <Header setProductId={setProductId} filterCategory={filterCategory} searchItem={searchItem} items={items} setSearchItem={setSearchItem}/>
        <div className="container">
          <div className="main__catalog">
            <Route path='/catalog' render={() => <Home  searchItem={searchItem} filter={filterCategory} setProductId={setProductId} items={items} sortItems={sortItems} />} />
            <Route path='/product/:id' render={() => <Product productFunc={setProductId} productId={productId} items={items} />} />
            <Route component={NotFound} />
          </div>
        </div>
      </div>
    </Switch>
  );
}

export default App;

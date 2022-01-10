import React from 'react';
import './App.scss';
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { SET_PRODUCTS, SET_CATEGORIES } from './store/actions'
import Home from './Components/Home'
import Product from './Components/Product/Product';
import SearchProduct from './Components/SearchModul/SearchProduct';
import BasketPage from './Components/Basket/BasketPage';
import { getDatabase, ref, child, get } from "firebase/database";
import Dashboard from './Components/adminPanel/Dashboard.jsx';

function App() {
  const dispatch = useDispatch()
  const dbrefresh = useSelector(state => state.prdoucts.dbRefresh)

  React.useEffect(() => {
    const db = getDatabase();
    const dbRef = ref(db);

    get(child(dbRef, `products/`)).then((snapshot) => {
      let dataArray = [];
      snapshot.forEach(item => {
        dataArray.push(item.val())
      })
      dispatch(SET_PRODUCTS(dataArray))
    }).catch((error) => {
      console.error(error);
    });

    get(child(dbRef, `categories/`)).then((snapshot) => {
      let dataArray = [];
      snapshot.forEach(item => {
        dataArray.push(item.val())
      })
      dispatch(SET_CATEGORIES(dataArray))
    }).catch((error) => {
      console.error(error);
    });
    console.log('refresh')
    console.log(process.env)
  }, [dbrefresh])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/category/:categoryId" element={<Home />} />
        <Route path="/search/:nameProduct" element={<SearchProduct />} />
        <Route path="/basket" element={<BasketPage />} />
        <Route path="/admin/*" element={<Dashboard />} />
      </Routes>

    </div>
  );
}

export default App;

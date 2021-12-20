import React from 'react';
import './App.scss';
import { Routes, Route } from "react-router-dom";
import { useDispatch } from 'react-redux' 


import Home from './Components/Home'
import Product from './Components/Product/Product';
import Header from './Components/Header';
import { SET_PRODUCTS, SET_CATEGORIES } from './store/actions'
import SearchProduct from './Components/SearchModul/SearchProduct';

function App() {
  const dispatch = useDispatch()
  
  React.useEffect(() => {
    fetch('/db.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch(SET_PRODUCTS(data.items))
        dispatch(SET_CATEGORIES(data.categories))
      });
  })

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/category/:categoryId" element={<Home />} />
        <Route path="/search/:nameProduct" element={<SearchProduct />} />
      </Routes>
    </div>
  );
}

export default App;

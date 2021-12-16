import React from 'react';
import './App.scss';
import { Routes, Route } from "react-router-dom";
import { useDispatch } from 'react-redux' 

import Home from './Components/Home'
import Product from './Components/Product';
import Header from './Components/Header';
import { SET_PRODUCTS } from './store/actions'

function App() {
  const dispatch = useDispatch()
  
  React.useEffect(() => {
    fetch('/db.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {dispatch(SET_PRODUCTS(data.items))});
  })
  
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Header from './Containers/Header';
import ProductListing from './Containers/productListing';
import ProdectDetails from './Containers/prodectDetails';
import "./App.css";
import PageNotFount from './Containers/PageNotFount';

const App =()=> {
  return (
    <div className="App">
    <Router>
      <Header/>
      <Routes>
      <Route path="/" exact element={<ProductListing/>} />
      <Route path="/product/:productId" element={<ProdectDetails/>} />
      <Route path="*" element={<PageNotFount/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;

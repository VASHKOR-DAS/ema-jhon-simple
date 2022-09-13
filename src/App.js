import React from 'react';
import './App.css';
import Header from './components/Header/Header';
// import Product from './components/Product/Product';
import Shop from './components/Shop/Shop';
import Review from './components/Review/Review';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import ProductDetail from './components/ProductDetail/ProductDetail';

function App() {
  return (
    <div>
      <Header></Header>

      <Router>
        <Routes>
          {/* default page show korar jnno */}
          <Route path="/" element={<Shop></Shop>}></Route>

          <Route path="/shop" element={<Shop></Shop>}></Route>

          <Route exact path="/review" element={<Review></Review>}></Route>

          <Route exact path='/inventory' element={<Inventory></Inventory>}></Route>

          {/* dynamic data set */}
          <Route path='/product/:ProductKey' element={<ProductDetail></ProductDetail>}></Route>

          <Route exact path='*' element={<NotFound></NotFound>}></Route>

        </Routes>
      </Router>

    </div>
  );
}

export default App;

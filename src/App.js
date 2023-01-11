import React from 'react';
import './App.css';
// import Product from './components/Product/Product';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Main from './layout/Main';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Shop from './components/Shop/Shop';
import Review from './components/Review/Review';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Shipping from './components/Shipping/Shipping';
import PrivateRoute from './routes/PrivateRoute';


function App() {
  return (
    <div className='bg-white'>
      <Main></Main>

      <Router>
        <Routes>

          {/* default page show korar jnno */}
          <Route path='/' element={<Shop></Shop>}></Route>

          <Route exact path='/shop' element={<Shop></Shop>}></Route>

          <Route exact path='/review' element={<Review></Review>}></Route>

          <Route path='/inventory' element={<Inventory></Inventory>}></Route>

          <Route path='/shipping' element={<PrivateRoute> <Shipping></Shipping> </PrivateRoute>}></Route>

          <Route path='/login' element={<Login></Login>}></Route>

          <Route path='/signup' element={<SignUp></SignUp>}></Route>

          {/* dynamic data set */}
          <Route path='/product/:ProductKey' element={<ProductDetail></ProductDetail>}></Route>

          <Route exact path='*' element={<NotFound></NotFound>}></Route>

        </Routes>
      </Router>

    </div>
  );
}

export default App;
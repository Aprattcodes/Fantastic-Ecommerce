//import logo from './logo.svg'; DELETE
// import './App.css'; DELETE
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';


function App() {

  return ( 
    <BrowserRouter>
    <div className="grid-container">

      <header className="row">
        <div>
          <a className="brand" href="/">ShopMe</a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
        </div>
      </header>

      <main>
        <Route path="/products/:id" component={ProductScreen}></Route> 
        <Route path="/" component={HomeScreen} exact></Route>
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;

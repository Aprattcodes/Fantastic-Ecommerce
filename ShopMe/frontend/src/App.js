//import logo from './logo.svg'; DELETE
// import './App.css'; DELETE
import React from 'react';
import data from "./data";

function App() {

  return ( 

    <div className="grid-container">

      <header className="row">
        <div>
          <a className="brand" href="index.html">ShopMe</a>
        </div>
        <div>
          <a href="cart.html">Cart</a>
          <a href="signin.html">Sign In</a>
        </div>
      </header>

      <main>

        <div>
          <div className="row center">

            {
              data.products.map((products) => (
              <div className="card">
              <a href="products.html">
                <img className="medium" src=".\images\coffee.jpg" alt="product" />
              </a>
              <div className="card-body">
                <a href="products.html">
                  <h2>{products.name}</h2>
                </a>
                <div className="rating">
                  <span> <i className="fa fa-star"></i> </span>
                  <span> <i className="fa fa-star"></i> </span>
                  <span> <i className="fa fa-star"></i> </span>
                  <span> <i className="fa fa-star"></i> </span>
                  <span> <i className="fa fa-star"></i> </span>
                </div>
                <div className="price">$120</div>
              </div>
            </div>
              ))  //convert products from data.js to HTML
            }

          </div> 
        </div>

      </main>
    </div>
  );
}

export default App;

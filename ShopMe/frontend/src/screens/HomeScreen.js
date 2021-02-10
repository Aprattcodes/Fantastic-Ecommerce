import React from 'react';
import Product from '../components/Product'; //two dots back two folders
import data from "../data";

export default function HomeScreen() {
    return (
        <div>
        <div className="row center">

          {
            data.products.map((products) => (
            <Product key={products._id} products={products}></Product> //extract a component
              )
            )  //convert products from data.js to HTML, better format because it's modular and component based
          }

        </div> 
      </div>
        );
}
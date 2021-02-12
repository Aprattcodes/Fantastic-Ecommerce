import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from '../components/Product'; //two dots back two folders


export default function HomeScreen() {
  const [products, setProducts] = useState([]); //uses react hook to manage react component (below)
  useEffect(() =>{
    const fetchData = async () => {
      const {data} = await axios.get('/api/products');
      setProducts(data);
    };
    fetchData();
  }, [])
    return (
        <div>
        <div className="row center">

          {
            products.map((products) => (
            <Product key={products._id} products={products}></Product> //extracts a component
              )
            )
          }

        </div> 
      </div>
        );
}
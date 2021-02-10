import React from 'react';
import data from '../data';
import Rating from '../components/Rating';

export default function ProductScreen(props) {
    const products = data.products.find((x) => x._id === props.match.params.id); //value user enter in route 
    if(!products) {
        return <div>products not found</div>
    }
    return (
        <div>
        <div>
          <div className="row top">
            <div className="col-2">
              <img
                className="large"
                src={products.image}
                alt={products.name}
              ></img>
            </div>
            <div className="col-1">
              <ul>
                <li>
                  <h1>{products.name}</h1>
                </li>
                <li>
                  <Rating
                    rating={products.rating}
                    numReviews={products.numReviews}
                  ></Rating>
                </li>
                <li>Price : ${products.price}</li>
                <li>
                  Description:
                  <p>{products.description}</p>
                </li>
              </ul>
            </div>
            <div className="col-1">
              <div className="card card-body">
                <ul>
                  <li>
                    <div className="row">
                      <div>Price</div>
                      <div className="price">${products.price}</div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div>Status</div>
                      <div>
                        {products.countInStock > 0 ? (
                          <span className="success">In Stock</span>
                        ) : (
                          <span className="danger">Unavailable</span>
                        )}
                      </div>
                    </div> 
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    </div>
    )
}
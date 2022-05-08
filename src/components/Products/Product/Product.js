import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
  const {model,seller,price,quantity,desc,img,_id} = product;
    return (
      <div className="card" style={{width:"18rem"}}>
        <img
          src={img}
          className="card-img-top"
          alt={model}
        />
        <div className="card-body">
          <h5 className="card-title">{model}</h5>
          <p className="card-text">
          {desc.slice(0,100)}
          </p>
          <p className="card-text">
         price :  {price}
          </p>
          <p className="card-text">
         quantity :  {quantity}
          </p>
          <p className="card-text">
         seller :  {seller}
          </p>
          <Link to={`/product/${_id}`} className="btn btn-primary">
            View Full Details
          </Link>
        </div>
      </div>
    );
};

export default Product;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from './Product/Product';
import './products.css'

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://powerful-peak-74853.herokuapp.com/get-laptops").then(res => {
      return res.json();
    }).then(data => {
      setProducts(data);
    })
  }, [])
  return (
    <div className='container'>
      <h2 className='mt-5 text-center text-primary text-uppercase '>Products</h2>
      <div className="row gutter-custom row-cols-1 row-cols-md-2 g-4 mt-2 gx-4 justify-content-center">
        {
          products && products.slice(0, 6).map((product) => (
            <Product key={product._id} product={product} />
          ))
        }
        <Link to="/manage-inventory" className="btn btn-primary text-light mt-2" aria-current="page">
          Manage Inventory
        </Link>
      </div>
    </div>
  );
};

export default Products;
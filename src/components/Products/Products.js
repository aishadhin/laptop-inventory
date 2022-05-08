import React, { useEffect, useState } from 'react';
import Product from './Product/Product';

const Products = () => {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
      fetch("https://powerful-peak-74853.herokuapp.com/get-laptops").then(res =>{
        return res.json();
      }).then(data =>{
        setProducts(data);
      })
    },[])
    return (
      <div className='container'>
        <h2 className='mt-5 text-center text-primary text-uppercase '>Products</h2>
        <div className="row gutter-custom row-cols-1 row-cols-md-2 g-4 mt-2 gx-4 justify-content-center">
        {
         products &&   products.map((product)=>(
                <Product key={product._id} product={product}/>
            ))
        }
        </div>
      </div>
    );
};

export default Products;
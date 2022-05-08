import React, { useEffect, useState } from 'react';
import Product from './Product/Product';

const Products = () => {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
      fetch("http://localhost:5000/get-laptops").then(res =>{
        return res.json();
      }).then(data =>{
        setProducts(data);
      })
    },[])
    return (
      <div className='container'>
        <div className="row row-cols-1 row-cols-md-2 g-4 mt-5 gx-4">
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
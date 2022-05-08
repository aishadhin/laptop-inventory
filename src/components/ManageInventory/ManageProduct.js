import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ManageP from "./ManageP";

const ManageProduct = () => {
  const [render,setRender] = useState(true);
  const [products,setProducts] = useState([]);
  useEffect(()=>{
    fetch("http://localhost:5000/get-laptops").then(res =>{
      return res.json();
    }).then(data =>{
      setProducts(data);
    })
  },[render])
  return (
    <div className="container">
      <Link className="btn btn-primary" to="/add-product">
        Add New PRoduct
      </Link>
      <div className="row row-cols-1 row-cols-md-4 g-4 mt-5 gx-4">
        {products.map((product) => (
          <ManageP key={product._id} product={product} render={render} setRender={setRender}/>
        ))}
      </div>
    </div>
  );
};

export default ManageProduct;

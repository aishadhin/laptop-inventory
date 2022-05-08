import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ManageP from "./ManageP";

const ManageProduct = () => {
  const [render,setRender] = useState(true);
  const [products,setProducts] = useState([]);
  useEffect(()=>{
    fetch("https://powerful-peak-74853.herokuapp.com/get-laptops").then(res =>{
      return res.json();
    }).then(data =>{
      setProducts(data);
    })
  },[render])
  return (
    <div className="container">
      <Link className="btn btn-primary mt-5 text-center d-block" to="/add-product">
        Add New Product
      </Link>
      <div className="row row-cols-1 row-cols-md-4 g-4 mt-2 gx-4">
        {products.map((product) => (
          <ManageP key={product._id} product={product} render={render} setRender={setRender}/>
        ))}
      </div>
    </div>
  );
};

export default ManageProduct;

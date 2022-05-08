import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const {id} = useParams();
  const [product,setProduct] = useState({});
  const {model,seller,price,quantity,desc,img,_id} = product;
  useEffect(()=>{
    fetch(`http://localhost:5000/laptop/${id}`).then(res =>{
      return res.json();
    }).then(data =>{
      setProduct(data);
    })
  },[id]);
  return (
    <div className="container mx-auto my-5">
      <div className="card mb-3" style={{ maxWidth: "650px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={img}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">PRoduct Title</h5>
              <p className="card-text">
               {
                 desc
               }
               </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

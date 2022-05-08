import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
const Updatep = () => {
  const { register, handleSubmit,reset } = useForm();
  const {id} = useParams();
  const [product,setProduct] = useState({});
  const {model,Seller,price,quantity,desc,img,_id} = product;
  const navigate = useNavigate();
  const onSubmit = (data) => {
    for(let key in data){
      if(data[key] === ''){
        data[key] = product[key];
      }

    }
    fetch(`http://localhost:5000/update-laptop/${_id}`,{
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res =>  res.json()).then(data =>{
      if(data.acknowledged){
        navigate("/")
      }
    })
    console.log(data);
  };
  
  useEffect(()=>{
    fetch(`http://localhost:5000/laptop/${id}`).then(res =>{
      return res.json();
    }).then(data =>{
      setProduct(data);
    })
  },[id,reset]);
  return (
    <div className="container card p-4 mt-5">
      <h1>Update Product</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Model Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Model Name"
            defaultValue={model}
            {...register("model")}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Seller</label>
          <input
            type="text"
            className="form-control"
            placeholder="Seller"
            {...register("Seller")}
            defaultValue={Seller}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            type="number"
            className="form-control"
            placeholder="Price"
            {...register("price")}
            defaultValue={price}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Quantity</label>
          <input
            type="number"
            className="form-control"
            placeholder="Quantity"
            {...register("quantity")}
            defaultValue={quantity}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Image URl</label>
          <input
            type="text"
            className="form-control"
            placeholder="Image Url"
            {...register("img")}
            defaultValue={img}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            rows="3"
            {...register("desc")}
            defaultValue={desc}
          ></textarea>
        </div>
        <div>
          <button className="btn btn-primary" type="submit">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default Updatep;

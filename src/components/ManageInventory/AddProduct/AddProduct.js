import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
const AddProduct = () => {
  const { register, handleSubmit,reset } = useForm();
  const {user} = useAuth();
  const onSubmit = (data) => {
    data.email = user.email;
    if(data.quantity < 1 || data.price < 1){
        alert("quantity Or Price cannot be 0 or negative")
    }else{
        fetch("https://powerful-peak-74853.herokuapp.com/add-laptop",{
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          }).then(res => res.json()).then(data => {
              console.log(data);
              if(data.acknowledged){
                reset();
              }else{
                alert("Something Went Wrong");
              }
          })
    }
  };
  return (
    <div className="container card p-4 mt-5">
      <h1>Add New Product</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Model Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Model Name"
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
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            rows="3"
            {...register("desc")}
          ></textarea>
        </div>
        <div>
          <button className="btn btn-primary" type="submit">
            Add New Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;

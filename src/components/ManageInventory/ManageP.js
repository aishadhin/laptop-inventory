import React from "react";
import { Link } from "react-router-dom";

const ManageP = ({product,render,setRender}) => {
  const {model,quantity,img,desc,price,_id} = product;
  const deleteHandler = (id)=>{
    fetch(`https://powerful-peak-74853.herokuapp.com/delete/${id}`,{
      method:"DELETE",
    }).then(res => res.json()).then(data =>{
      if(data.deletedCount == 1){
        setRender(!render);
  }
    })
}
  const updateHandler = (id)=>{
    if(+quantity > 0){
      fetch(`https://powerful-peak-74853.herokuapp.com/update-quantity/${id}`,{
        method:"PUT",
      }).then(res => res.json()).then(data =>{
        if(data.acknowledged){
          setRender(!render);
        }
      })
    }else{
      alert("All Quatity finished");
    }
  }
  return (
    <div className="card">
      <img
        src={img}
        className="card-img-top"
        alt={model}
      />
      <div className="card-body">
        <h5 className="card-title">{model}</h5>
        <p className="card-text">
         {desc.slice(0,50)}
        </p>
        <p>
          quantity : {quantity}
        </p>
      </div>
      <div style={{display:"flex",gap:"8px"}}>
        <Link className="btn btn-primary" to={`/update/${_id}`}>Update</Link>
        <button className="btn btn-primary" onClick={()=> deleteHandler(_id)}>Delete</button>
        <button className="btn btn-primary" onClick={()=> updateHandler(_id)}>Delivered</button>
      </div>
    </div>
  );
};

export default ManageP;

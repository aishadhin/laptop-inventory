import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Product from '../Products/Product/Product';

const Myitems = () => {
    const {user} = useAuth();
    const [product,setProduct] = useState([]);
    const [found,setFound] = useState(true);
    useEffect(()=>{
        fetch(`https://powerful-peak-74853.herokuapp.com/my-items/${user.email}`).then(res => res.json()).then((data)=>{
            if(data.length == 0){
                setFound(false)
            }else{
                setFound(true);
                setProduct(data);
            }
        })

    },[user])
    return (
        <div className='container'>
            {
                !found ? <h1>You Havent added Any Products</h1>
                 :
                <>
                <div className="row gutter-custom row-cols-1 row-cols-md-2 g-4 mt-2 gx-4 justify-content-center">
                    {
                        product.map((item)=>(
                            <Product key={item._key} product={item}/>
                        ))
                    }
                </div>
                </>
            }
        </div>
    );
};

export default Myitems;
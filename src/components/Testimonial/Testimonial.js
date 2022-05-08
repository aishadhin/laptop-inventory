import React from 'react';
import './Testimonial.css'

const Testimonial = () => {
    return (
        <div className='container d-flex justify-content-between mt-5 pt-5 pb-5'>
            <div>
                <h2 className='text-black text-uppercase text-center'>Total Sell</h2>
                <h1 className='text-primary text-uppercase text-center'>625+</h1>
            </div>
            <div>
                <h2 className='text-black text-uppercase text-center'>Total Revinew</h2>
                <h1 className='text-primary text-uppercase text-center'>$600,000+</h1>
            </div>
            <div>
                <h2 className='text-black text-uppercase text-center'>Order on Procces</h2>
                <h1 className='text-primary text-uppercase text-center'>34+</h1>
            </div>
            <div>
                <h2 className='text-black text-uppercase text-center'>Ratting</h2>
                <h1 className='text-primary text-uppercase text-center'>4.8/5</h1>
            </div>
        </div>
    );
};

export default Testimonial;
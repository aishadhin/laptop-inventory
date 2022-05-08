import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'
const Banner = () => {
    return (
        <div className='banner'>
            <h1>Checkout Our Laptop <br/> Collection</h1>
            <Link to="/manage-inventory" className="btn btn-light text-primary mt-2" aria-current="page">
                  Manage Inventory
                </Link>
        </div>
    );
};

export default Banner;
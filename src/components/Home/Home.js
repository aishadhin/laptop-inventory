import React from 'react';

import Products from '../Products/Products';
import Testimonial from '../Testimonial/Testimonial';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products/>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;
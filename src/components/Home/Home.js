import React from 'react';
import Footer from '../Footer/Footer';

import Products from '../Products/Products';
import Testimonial from '../Testimonial/Testimonial';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products/>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    );
};

export default Home;
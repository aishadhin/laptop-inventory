import React from 'react';
import ContactUs from '../ContactUs/ContactUs';
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
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;
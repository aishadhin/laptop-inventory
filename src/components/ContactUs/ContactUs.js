import React from 'react';
import contact from '../../../src/contact.png'

const ContactUs = () => {
    return (
        <div className='container mt-5'>
            <h2 className='mt-5 text-center'>Contact Us</h2>
            <div className='mt-2 d-flex align-items-center justify-content-space-between'>
                <div><h3>Address: Level:03, House:1005,1007, Avenue:11, Road:09, Dhaka 1216</h3></div>
                <div><img src={contact} alt='' /></div>
            </div>
        </div>
    );
};

export default ContactUs;
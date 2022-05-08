import React from 'react';
import notFound from '../../notFound.jpg'

const NotFound = () => {
    return (
        <div className='tex-center container'>
            <img className='img-fluid' src={notFound} alt=''/>
        </div>
    );
};

export default NotFound;
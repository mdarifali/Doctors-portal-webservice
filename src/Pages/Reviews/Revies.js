import React from 'react';
import MakeAppointment from '../Home/MakeAppointment';
import Testimonial from '../Home/Testimonial';
import Footer from '../Shared/Footer';

const Reviews = () => {
    return (
        <div className='py-14'>
            <MakeAppointment />
            <Testimonial />
            <Footer />
        </div>
    );
};

export default Reviews;
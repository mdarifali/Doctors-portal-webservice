import React from 'react';
import quote from '../../assets/icons/quote.svg';
import pepole1 from '../../assets/images/people1.png';
import pepole2 from '../../assets/images/people2.png';
import pepole3 from '../../assets/images/people3.png';
import TestimonialCard from './TestimonialCard';

const Testimonial = () => {
    return (
        <section className='px-12 mt-10'>
            <div className='flex justify-between'>
                <div>
                    <h2 className='text-primary text-2xl font-bold'>Testimonial</h2>
                    <h1 className='text-5xl'>What Our Patients Says</h1>
                </div>
                <div>
                    <img className='w-48' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5'>
                <TestimonialCard img={pepole1} />
                <TestimonialCard img={pepole2} />
                <TestimonialCard img={pepole3} />
            </div>
        </section>
    );
};

export default Testimonial;
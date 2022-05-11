import React from 'react';
import Service from './Service';
import fluoride from '../../assets/images/fluoride.png';
import whitening from '../../assets/images/whitening.png';
import cavity from '../../assets/images/cavity.png';


const Services = () => {

    return (
        <section className=' my-20 px-12'>
            <h2 className='text-center text-xl font-bold' style={{ color:"#19D3AE"}}>OUR SERVICES</h2>
            <h1 className='text-center text-5xl mb-10'>Services We Provide</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5'>
                <Service serviceTitle={'Fluoride Treatment'} img={fluoride} />
                <Service serviceTitle={'Cavity Filling'} img={cavity} />
                <Service serviceTitle={'Teeth Whitening'} img={whitening} />
            </div>
        </section>
    );
};

export default Services;
import React from 'react';
import { Link } from 'react-router-dom';
import treatment from '../../assets/images/treatment.png'

const Exceptional = () => {

    return (
        <section className='my-12'>
            <div className="hero min-h-screen">
                <div className="hero-content flex flex-col lg:flex-row">
                    <div className='flex-1 max-w-lg'>
                        <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    </div>
                    <div className='flex-1 ml-12'>
                        <h1 className="text-5xl font-bold">Exceptional Dental Care, <br /> on Your Terms</h1>
                        <p className="py-8">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam tenetur nobis labore, quis minus explicabo nisi officia repellendus repudiandae reprehenderit consequuntur ipsam autem commodi accusamus doloribus consequatur accusantium aperiam sint voluptatum ipsa possimus! Repellat voluptatem voluptatibus commodi eos dolorem deleniti.</p>
                        <Link to='/appointment' className="btn font-bold bg-gradient-to-r from-secondary to-primary">Get Started</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Exceptional;
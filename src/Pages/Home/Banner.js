import React from 'react';
import chair from '../../assets/images/chair.png';
import bannerBg from '../../assets/images/bg.png';
import { Link } from 'react-router-dom';

const Banner = () => {
    
    return (
        <section className="hero min-h-screen px-12" style={{ background: `url(${bannerBg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <div className="hero-content flex-col lg:flex-row-reverse gap-10">
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='banner'/>
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. <br /> In deleniti  eaque aut repudiandae et a id nisi.</p>
                    <Link to='/appointment' className="btn font-bold bg-gradient-to-r from-primary to-secondary">Get Started</Link>
                </div>
            </div>
        </section>
    );
};

export default Banner;
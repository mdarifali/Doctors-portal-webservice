import React from 'react';
import chair from '../../assets/images/chair.png';
import bannerBg from '../../assets/images/bg.png';

const Banner = () => {
    
    return (
        <section class="hero min-h-screen px-12" style={{ background: `url(${bannerBg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <div class="hero-content flex-col lg:flex-row-reverse gap-10">
                <img src={chair} class="max-w-sm rounded-lg shadow-2xl" alt='banner'/>
                <div>
                    <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p class="py-6 leading-relaxed">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti  eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-primary uppercase font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                </div>
            </div>
        </section>
    );
};

export default Banner;
import React from 'react';
import treatment from '../../assets/images/treatment.png'

const Exceptional = () => {

    return (
        <section className='my-12'>
            <div class="hero min-h-screen">
                <div class="hero-content flex flex-col lg:flex-row">
                    <div className='flex-1 max-w-lg'>
                        <img src={treatment} class="max-w-sm rounded-lg shadow-2xl" alt='' />
                    </div>
                    <div className='flex-1 ml-12'>
                        <h1 class="text-5xl font-bold">Exceptional Dental Care, <br /> on Your Terms</h1>
                        <p class="py-8">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam tenetur nobis labore, quis minus explicabo nisi officia repellendus repudiandae reprehenderit consequuntur ipsam autem commodi accusamus doloribus consequatur accusantium aperiam sint voluptatum ipsa possimus! Repellat voluptatem voluptatibus commodi eos dolorem deleniti.</p>
                        <button class="btn" style={{ backgroundColor: "#19D3AE" }}>Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Exceptional;
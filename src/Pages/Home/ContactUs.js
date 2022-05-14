import React from 'react';
import appointment from '../../assets/images/appointment.png';


const ContactUs = () => {
    return (
        <section className='my-20'>
            <div class="hero" style={{ background: `url(${appointment})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                <div class="hero-content ">
                    <div className='card p-5'>
                        <h2 className='text-2xl font-bold text-center' style={{ color: "#19D3AE" }} >Contact Us</h2>
                        <h1 class="text-white text-5xl text-center">Stay connected with us</h1>
                        <div class="mt-10">
                            <div class="form-control">
                                <input type="email" placeholder="Email Address" class="input input-bordered" />
                            </div>
                            <div class="form-control my-5">
                                <input type="text" placeholder="Subject" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <textarea class="textarea" rows="4" cols="50" placeholder="Your message"></textarea>
                            </div>
                            <div className='text-center my-5'>
                                <button class="btn btn-accent text-white">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
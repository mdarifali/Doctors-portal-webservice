import React from 'react';
import appointment from '../../assets/images/appointment.png';


const ContactUs = () => {
    return (
        <section className='my-20'>
            <div className="hero" style={{ background: `url(${appointment})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                <div className="hero-content ">
                    <div className='card p-5'>
                        <h2 className='text-2xl font-bold text-center text-primary' >Contact Us</h2>
                        <h1 className="text-white text-5xl text-center">Stay connected with us</h1>
                        <div className="mt-10">
                            <div className="form-control">
                                <input type="email" placeholder="Email Address" className="input input-bordered" />
                            </div>
                            <div className="form-control my-5">
                                <input type="text" placeholder="Subject" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <textarea className="textarea" rows="4" cols="50" placeholder="Your message"></textarea>
                            </div>
                            <div className='text-center my-5'>
                                <button className="btn font-bold bg-gradient-to-r from-secondary to-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
import React from 'react';
import doctor from '../../assets/images/doctor-small.png';
import appointment from '../../assets/images/appointment.png';
import { Link } from 'react-router-dom';


const MakeAppointment = () => {
    return (
        <section className='my-40'>
            <div className="hero" style={{ background: `url(${appointment})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                <div className="hero-content flex flex-col lg:flex-row p-0 gap-5">
                    <div className='flex-1' style={{marginTop:"-100px"}}>
                        <img src={doctor} alt='' />
                    </div>
                    <div className='text-white flex-1 ml-12'>
                        <h2 className='text-2xl font-bold' style={{ color: "#19D3AE" }} >Appointment</h2>
                        <h1 className="text-5xl font-bold mt-5">Make an appointment Today</h1>
                        <p className="py-8">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam tenetur nobis labore, quis minus explicabo nisi officia repellendus repudiandae reprehenderit consequuntur ipsam autem commodi accusamus doloribus consequatur accusantium aperiam sint voluptatum ipsa possimus! Repellat voluptatem voluptatibus commodi eos dolorem deleniti.</p>
                        <Link to='/appointment' className="btn font-bold bg-gradient-to-r from-secondary to-primary mb-4">Get Started</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;
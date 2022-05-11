import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Cards from './Cards';
import ContactUs from './ContactUs';
import Exceptional from './Exceptional';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonial from './Testimonial';


const Home = () => {
    return (

        <div>
            <Banner />
            <Cards />
            <Services />
            <Exceptional />
            <MakeAppointment />
            <Testimonial />
            <ContactUs />
            <Footer />
        </div>
    );
};

export default Home;
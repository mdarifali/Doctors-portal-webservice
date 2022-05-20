import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Cards = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 px-12'>
            <InfoCard bgColor="bg-primary" cardTitel={'Opening Hours'} img ={clock} />
            <InfoCard bgColor="bg-accent" cardTitel={'Visit Ours Location'} img={marker} />
            <InfoCard bgColor="bg-primary" cardTitel={'Contact Us Now'} img={phone} />
        </div>
    );
};

export default Cards;
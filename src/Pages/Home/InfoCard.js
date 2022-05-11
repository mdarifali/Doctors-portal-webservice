import React from 'react';

const InfoCard = ({ img, cardTitel, bgColor }) => {

    return (
        <div class={`card lg:card-side bg-accent shadow-xl ${bgColor}`}>
            <figure>
                <img className='p-6' src={img} alt="Album" />
            </figure>
            <div class="card-body text-white">
                <h2 class="card-title">{cardTitel}</h2>
                <p className='py-1'>Click the button to listen on Spotiwhy app.</p>
            </div>
        </div>
    );
};

export default InfoCard;
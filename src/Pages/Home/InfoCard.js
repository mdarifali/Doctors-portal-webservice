import React from 'react';

const InfoCard = ({ img, cardTitel, bgColor }) => {

    return (
        <div className={`card lg:card-side shadow-xl ${bgColor}`}>
            <figure>
                <img className='p-6' src={img} alt="Album" />
            </figure>
            <div className="card-body text-white">
                <h2 className="card-title">{cardTitel}</h2>
                <p className='py-1'>Click the button to listen on Spotiwhy app.</p>
            </div>
        </div>
    );
};

export default InfoCard;
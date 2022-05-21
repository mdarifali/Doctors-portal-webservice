import React from 'react';

const Service = ({ img, serviceTitle }) => {
    return (
        <div className="card bg-white shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="dental" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title py-1">{serviceTitle}</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum obcaecati fuga omnis ad sit totam.</p>
            </div>
        </div>
    );
};

export default Service;
import React from 'react';

const Service = ({ img, serviceTitle }) => {
    return (
        <div class="card bg-white shadow-xl">
            <figure class="px-10 pt-10">
                <img src={img} alt="dental" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title py-1">{serviceTitle}</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum obcaecati fuga omnis ad sit totam.</p>
            </div>
        </div>
    );
};

export default Service;
import React from 'react';
import clock from '../../assets/icons/clock.svg';

const InfoCard = () => {
    return (
        <div className='grid grid-cols-3 gap-4'>
            <div class="card lg:card-side bg-primary shadow-xl">
                <figure>
                    <img src={clock} alt="Album" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">Opening Hours</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                </div>
            </div>
            <div class="card lg:card-side bg-secondary shadow-xl">
                <figure>
                    <img className='' src={clock} alt="Album" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">Opening Hours</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                </div>
            </div>
            <div class="card lg:card-side bg-secondary shadow-xl">
                <figure>
                    <img src={clock} alt="Album" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">Opening Hours</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                </div>
            </div>
        </div>

    );
};

export default InfoCard;
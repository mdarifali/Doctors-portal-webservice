import React from 'react';
import { SpinnerDotted } from 'spinners-react';

const Loading = () => {
    return (
        <div class="hero min-h-screen bg-gray-50">
            <div class="hero-content text-center">
                <div class="max-w-md">
                    <SpinnerDotted size={100} thickness={96} speed={114} color="#19D3AE" />
                    <h1 className='mt-2 text-xl font-bold text-primary'>Loading...</h1>
                </div>
            </div>
        </div>
    );
};

export default Loading;
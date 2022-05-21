import React from 'react';

const TestimonialCard = ({img}) => {
    return (
        <div className="card shadow-xl">
            <div className="card-body">
                <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                <div className='my-5 flex items-center'>
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt='' />
                        </div>
                    </div>
                    <div className='ml-5'>
                        <h1 className='text-2xl font-bold'>Winson Herry</h1>
                        <h2 className='text-xl'>California</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
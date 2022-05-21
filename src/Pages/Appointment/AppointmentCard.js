import React from 'react';

const AppointmentCard = ({ service, setTreatment }) => {
    const { name, slots } = service;

    return (
        <div className="card lg:max-w-lg shadow-xl text-primary-content">
            <div className="card-body">
                <h2 className="card-title justify-center text-xl text-primary">{name}</h2>
                <p className='text-center'>
                    {
                        slots.length > 0 ? <span className='text-neutral'>{slots[0]}</span>
                            : <span className='text-red-500'>No Slot Available! Try next day</span>
                    }
                </p>
                <p className='text-center text-neutral'>{slots.length} {slots.length > 1 ? 'space' : 'space'} available</p>
                <div className="card-actions justify-center">
                    <label disabled={slots.length === 0}
                        htmlFor="booking-modal"
                        onClick={() => setTreatment(service)}
                        className="btn btn-success text-white">Book Appointment
                    </label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentCard;
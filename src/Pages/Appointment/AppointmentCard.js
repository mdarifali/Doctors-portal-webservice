import React from 'react';

const AppointmentCard = ({ service, setTreatment }) => {
    const { name, slots } = service;

    return (
        <div class="card lg:max-w-lg shadow-xl text-primary-content">
            <div class="card-body">
                <h2 class="card-title justify-center text-xl" style={{ color: "#19D3AE" }}>{name}</h2>
                <p className='text-center'>
                    {
                        slots.length > 0 ? <span className='text-neutral'>{slots[0]}</span>
                            : <span className='text-red-500'>No Slot Available! Try next day</span>
                    }
                </p>
                <p className='text-center text-neutral'>{slots.length} {slots.length > 1 ? 'space' : 'space'} available</p>
                <div class="card-actions justify-center">
                    <label disabled={slots.length === 0}
                        htmlFor="booking-modal"
                        onClick={() => setTreatment(service)}
                        class="btn btn-success text-white">Book Appointment
                    </label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentCard;
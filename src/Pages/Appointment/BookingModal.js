import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ treatment, setTreatment, date }) => {
    const { _id, name, slots } = treatment;

    const hnadleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        setTreatment(null)
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg" style={{ color: "#19D3AE" }}>Booking For {name}</h3>
                    <form onSubmit={hnadleBooking} className='mt-10'>
                        <div class="form-control">
                            <input type="text" disabled value={format(date, 'PP')} class="input input-bordered input-success" />
                        </div>
                        <div class="form-control my-5">
                            <select name='slot' class="select select-success">

                                {
                                    slots.map(slot => <option
                                        key={slots._id}
                                        value={slot}
                                    >{slot}</option>)
                                }

                            </select>
                        </div>
                        <div class="form-control my-5">
                            <input type="text" name='name' placeholder="Full Name" class="input input-bordered input-success" />
                        </div>
                        <div class="form-control my-5">
                            <input type="number" name='phone' placeholder="Phone Number" class="input input-bordered input-success" />
                        </div>
                        <div class="form-control my-5">
                            <input type="text" name='Emial Address' placeholder="Email" class="input input-bordered input-success" />
                        </div>
                        <div class="form-control">
                            <button type='submit' for="booking-modal" class="btn">Sumbit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
import React from 'react';
import { format } from 'date-fns';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading';
import { toast, ToastContainer } from 'react-toastify';

const BookingModal = ({ treatment, setTreatment, date }) => {
    const { _id, name, slots } = treatment;
    const [user, loading] = useAuthState(auth);
    const formatDate = format(date, 'PP')

    if (loading) {
        return <Loading />
    }

    const hnadleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        const phone = event.target.phone.value
        const booking = {
            
            treatment: name,
            date: formatDate,
            slot,
            patient: user.email,
            patientName: user.displayName,
            phone
        }

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.success) {
                toast.success(`Your Appointment is Booking on ${formatDate} at ${slot}`,{
                    position: toast.POSITION.TOP_CENTER
                });
            }
            else{
                toast.error(`Your Appointment is Already Booking on ${data.booking?.date} at ${data.booking?.slot}`,{
                    position: toast.POSITION.TOP_CENTER
                });
            }
            
            setTreatment(null);

        })

    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label htmlFor="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg text-primary">Booking For {name}</h3>
                    <form onSubmit={hnadleBooking} className='mt-10'>
                        <div class="form-control">
                            <input type="text" disabled value={format(date, 'PP')} class="input input-bordered input-success" />
                        </div>
                        <div class="form-control my-5">
                            <select name='slot' class="select select-success">

                                {
                                    slots.map(slot => <option
                                        key={slots.id}
                                        value={slot}
                                    >{slot}</option>)
                                }

                            </select>
                        </div>
                        <div class="form-control my-5">
                            <input type="text" name='name' value={user?.displayName} disabled class="input input-bordered input-success" />
                        </div>
                        <div class="form-control my-5">
                            <input type="email" name='email' value={user?.email} disabled class="input input-bordered input-success" />
                        </div>
                        <div class="form-control my-5">
                            <input type="number" name='phone' placeholder="Phone Number" class="input input-bordered input-success" />
                        </div>
                        <div class="form-control">
                            <button type='submit' htmlFor="booking-modal" class="btn">Sumbit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
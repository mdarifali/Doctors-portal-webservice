import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppointmentCard from './AppointmentCard';
import BookingModal from './BookingModal';
import Loading from '../Shared/Loading';

const AvailableAppointment = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const [loading, setLoading] = useState(false);
    

    useEffect(() => {
        setLoading(true)
        const url = `http://localhost:5000/service`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setLoading(false)
            })
    }, []);

    return (
        <div className='my-16'>
            <h1 className='text-center text-xl font-bold my-5' style={{ color: "#19D3AE" }}>Available Appointment On: {format(date, 'PP')}</h1>
            {loading ? <Loading /> :
                <>
                    <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 p-10'>
                {
                    services.map(data => <AppointmentCard
                        key={data._id}
                        service={data}
                        setTreatment={setTreatment}
                    />)
                }
            </div>
            {treatment && <BookingModal
                date={date}
                treatment={treatment}
                setTreatment={setTreatment}
            />}
                </>
            }
        </div>
    );
};

export default AvailableAppointment;
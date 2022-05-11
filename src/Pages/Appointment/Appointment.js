import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppointment from './AvailableAppointment ';


const Appointment = () => {
    const [selected, setSelected] = useState(Date.now());

    return (
        <div>
            <AppointmentBanner date={selected} setDate={setSelected} />
            <AvailableAppointment date={selected} setDate={setSelected} />
            <Footer />
        </div>
    );
};

export default Appointment;
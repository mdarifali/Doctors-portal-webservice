import React from 'react';
import chair from '../../assets/images/chair.png';
import bannerBg from '../../assets/images/bg.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const AppointmentBanner = ({ date, setDate}) => {
    
    return (
        <section style={{ background: `url(${bannerBg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row-reverse gap-10">
                    <img src={chair} class="max-w-sm rounded-lg shadow-2xl" alt='banner' />
                    <div className='card rounded-lg shadow-xl'>
                        <DayPicker
                            styles={{
                                caption: { color: 'red' }
                            }}
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointmentBanner;
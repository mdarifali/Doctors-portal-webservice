import React from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';

const ResetPassword = () => {
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);

    if (error) {
        toast.error(error.message, {
            position: toast.POSITION.TOP_LEFT
        })
      }

    //   if (sending) {
    //     toast.success('Email Sending...', {
    //         position: toast.POSITION.TOP_CENTER
    //     });
    //   }

    const handleReset = async  event => {
        event.preventDefault();
        const email = event.target.email.value;
        await sendPasswordResetEmail(email);
        toast.success('Email Send Scuccess', {
            position: toast.POSITION.TOP_CENTER
        });
    }

    return (
        <section>
            <div className="hero min-h-screen">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-3xl font-bold">Forgot Password</h1>
                        <form onSubmit={handleReset} className='mt-7'>
                            <input type="email" name='email' placeholder="Email Address" className="input input-bordered input-accent w-full max-w-xs" required />
                            <button type='submit' className="btn bg-red-600 text-white w-full max-w-xs my-5 ">Reset Now</button>
                            <div className='text-sm text-center'>
                                <Link to='/login'>
                                    <button type='submit' className="btn text-white w-full max-w-xs ">Go Back Login</button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ResetPassword;
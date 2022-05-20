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
            <div class="hero min-h-screen">
                <div class="hero-content text-center">
                    <div class="max-w-md">
                        <h1 class="text-3xl font-bold">Forgot Password</h1>
                        <form onSubmit={handleReset} className='mt-7'>
                            <input type="email" name='email' placeholder="Email Address" class="input input-bordered input-accent w-full max-w-xs" required />
                            <button type='submit' class="btn bg-red-600 text-white w-full max-w-xs my-5 ">Reset Now</button>
                            <div className='text-sm text-center'>
                                <Link to='/login'>
                                    <button type='submit' class="btn text-white w-full max-w-xs ">Go Back Login</button>
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
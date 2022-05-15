import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../Login/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading';

const Singup = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error
    ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const location = useLocation();
    const form = location.state?.pathname || '/';

    if (error) {
        toast.error(error.message, {
            position: toast.POSITION.TOP_LEFT
        })
    }

    if (loading) {
        return <Loading />;
    }

    if (user) {
        navigate(form);
    }


    const handleSingup = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const name = event.target.name.value;
        createUserWithEmailAndPassword(email, password, name);
    }


    return (
        <div class="hero min-h-screen">
            <div class="hero-content text-center">
                <div class="max-w-md">
                    <h1 class="text-3xl font-bold">Register Form</h1>
                    <form onSubmit={handleSingup} className='mt-7'>
                        <input type="text" name='name' placeholder="Full Name" class="mb-5 input input-bordered input-accent w-full max-w-xs" required />
                        <input type="email" name='email' placeholder="Email Address" class="mb-5 input input-bordered input-accent w-full max-w-xs" required />
                        <input type="password" name='password' placeholder="Password" class="mb-2 input input-bordered input-accent w-full max-w-xs" required />
                        <button type='submit' class="btn text-white w-full max-w-xs my-5 ">Register Now</button>
                        <div className='text-sm text-center'>
                            <Link to='/login'>
                                <p>Already have an account? <span className=' text-cyan-400 font-bold'>Login Now</span></p>
                            </Link>
                        </div>
                        <div className='px-12'>
                            <div class="divider">OR</div>
                        </div>
                        <SocialLogin />
                    </form>
                </div>
                <ToastContainer autoClose={5000} />
            </div>
        </div>
    );
};

export default Singup;
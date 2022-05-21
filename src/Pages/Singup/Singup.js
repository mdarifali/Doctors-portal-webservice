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
        toast.success(`${name} Congratulations! Welcome our new member`, {
            position: toast.POSITION.TOP_LEFT
        });
    }


    return (
        <div className="hero min-h-screen">
            <div className="hero-content text-center shadow-2xl rounded-2xl">
                <div className="max-w-md">
                    <h1 className="text-3xl font-bold">Register Form</h1>
                    <form onSubmit={handleSingup} className='mt-7'>
                        <input type="text" name='name' placeholder="Full Name" className="mb-5 input input-bordered input-accent w-full max-w-xs" required />
                        <input type="email" name='email' placeholder="Email Address" className="mb-5 input input-bordered input-accent w-full max-w-xs" required />
                        <input type="password" name='password' placeholder="Password" className="mb-2 input input-bordered input-accent w-full max-w-xs" required />
                        <button type='submit' className="btn btn-accent text-white w-full max-w-xs my-5 ">Register Now</button>
                        <div className='text-sm text-center'>
                            <Link to='/login'>
                                <p>Already have an account? <span className='text-primary font-bold'>Login Now</span></p>
                            </Link>
                        </div>
                        <div className='px-12'>
                            <div className="divider">OR</div>
                        </div>
                        <SocialLogin />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Singup;
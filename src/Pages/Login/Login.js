import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import { ToastContainer, toast } from 'react-toastify';
import SocialLogin from './SocialLogin';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';


const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

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

    const handleLogin = event => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);
    }


    return (
        <section>
            <div class="hero min-h-screen">
                <div class="hero-content text-center">
                    <div class="max-w-md">
                        <h1 class="text-3xl font-bold">Login</h1>
                        <form onSubmit={handleLogin} className='mt-8'>
                            <input type="email" name='email' placeholder="Email Address" class="mb-5 input input-bordered input-accent w-full max-w-xs" required />
                            <input type="password" name='password' placeholder="Password" class="mb-3 input input-bordered input-accent w-full max-w-xs" required />
                            <div className='text-sm text-left ml-9'>
                                <Link to='/#'><p>Forgot Password?</p></Link>
                            </div>
                            <button type='submit' class="btn text-white w-full max-w-xs my-5 ">Login</button>
                            <div className='text-sm text-center'>
                                <Link to='/singup'>
                                    <p>New to Doctors Portal? <span className=' text-cyan-400 font-bold'>Create new account</span></p>
                                </Link>
                            </div>
                            <div class="divider px-9">OR</div>
                            <SocialLogin />
                        </form>
                    </div>
                </div>
                <ToastContainer autoClose={5000} />
            </div>
        </section>
    );
};

export default Login;
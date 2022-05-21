import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import { toast } from 'react-toastify';
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
        toast.success(`Welcome! Login Successful`, {
            position: toast.POSITION.TOP_LEFT
        });
    }

    const handleLogin = event => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);
    }


    return (
        <section>
            <div className="hero min-h-screen">
                <div className="hero-content text-center shadow-2xl rounded-2xl">
                    <div className="max-w-md">
                        <h1 className="text-3xl font-bold">Login</h1>
                        <form onSubmit={handleLogin} className='mt-8'>
                            <input type="email" name='email' placeholder="Email Address" className="mb-5 input input-bordered input-accent w-full max-w-xs" required />
                            <input type="password" name='password' placeholder="Password" className="mb-3 input input-bordered input-accent w-full max-w-xs" required />
                            <div className='text-sm text-left ml-9'>
                                <Link to='/resetpass'><p>Forgot Password?</p></Link>
                            </div>
                            <button type='submit' className="btn btn-accent text-white w-full max-w-xs my-5 ">Login</button>
                            <div className='text-sm text-center'>
                                <Link to='/singup'>
                                    <p>New to Doctors Portal? <span className='text-primary font-bold'>Create new account</span></p>
                                </Link>
                            </div>
                            <div className="divider px-9">OR</div>
                            <SocialLogin />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const form = location.state?.pathname || '/';

    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    // if (loading) {
    //     return <p>Loading...</p>;
    // }
    if (user) {
        navigate(form);
    }


    return (
        <section>
            <div class="hero min-h-screen">
                <div class="hero-content text-center">
                    <div class="max-w-md">
                        <h1 class="text-3xl font-bold">Login</h1>
                        <form className='mt-8'>
                            <input type="email" name='email' placeholder="Email Address" class="mb-5 input input-bordered input-accent w-full max-w-xs" required/>
                            <input type="password" name='password' placeholder="Password" class="mb-3 input input-bordered input-accent w-full max-w-xs" required/>
                            <div className='text-sm text-left ml-9'>
                                <Link to='/#'><p className='text-red-500'>Forgot Password?</p></Link>
                            </div>
                            <button class="btn text-white w-full max-w-xs my-5 ">Login</button>

                            <div className='text-sm text-center'>
                                <Link to='/singup'>
                                    <p>New to Doctors Portal? <span className=' text-cyan-400 font-bold'>Create new account</span></p>
                                </Link>
                            </div>
                            <div class="divider px-9">OR</div>
                            <button onClick={() => signInWithGoogle()} class="btn btn-outline bg-red-500 text-white my-3 w-full max-w-xs">CONTINUE WITH GOOGLE</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
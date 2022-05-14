import React from 'react';
import { Link } from 'react-router-dom';

const Singup = () => {

    return (
        <div class="hero min-h-screen">
            <div class="hero-content text-center">
                <div class="max-w-md">
                    <h1 class="text-3xl font-bold">Register Form</h1>
                    <form className='mt-7'>
                        <input type="text" name='name' placeholder="Full Name" class="mb-5 input input-bordered input-accent w-full max-w-xs" required />
                        <input type="number" name='phone' placeholder="Phone Number" class="mb-5 input input-bordered input-accent w-full max-w-xs" required />
                        <input type="email" name='email' placeholder="Email Address" class="mb-5 input input-bordered input-accent w-full max-w-xs" required />
                        <input type="password" name='password' placeholder="Password" class="mb-2 input input-bordered input-accent w-full max-w-xs" required />
                        <button class="btn text-white w-full max-w-xs my-5 ">Register Now</button>
                        <div className='text-sm text-center'>
                            <Link to='/login'>
                                <p>Already have an account? <span className=' text-cyan-400 font-bold'>Login Now</span></p>
                            </Link>
                        </div>
                        <div className='px-12'>
                            <div class="divider">OR</div>
                        </div>
                        <button class="btn bg-red-500 text-white w-full max-w-xs mt-2">CONTINUE WITH GOOGLE</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Singup;
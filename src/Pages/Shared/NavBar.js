import React from 'react';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../firebase.init';

const NavBar = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    };

    const navItems = <>
        <li className='mx-2'><NavLink to='/'>Home</NavLink></li>
        <li className='mx-2'><NavLink to='/appointment'>Appointment</NavLink></li>
        <li className='mx-2'><NavLink to='/reviews'>Reviews</NavLink></li>
        <li className='mx-2'><NavLink to='/contact'>Contact</NavLink></li>
        <li className='mx-2'><NavLink to='/about'>About</NavLink></li>
        {
            user && <li><Link to="/dashboard">Dashboard</Link></li>
        }
        <li className='mx-3'>
            {
                user ? <button onClick={logout} className='btn btn-outline text-red-400'>Sing Out</button> :
                    <NavLink to='/login'>Login</NavLink>
            }
        </li>
    </>

    return (
        <div className="navbar bg-base-100 px-12 fixed top-0 inset-x-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeilnejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li className='mb-2'><NavLink to='/'>Home</NavLink></li>
                        <li className='mb-1'><NavLink to='/appointment'>Appointment</NavLink></li>
                        <li className='mb-1'><NavLink to='/reviews'>Reviews</NavLink></li>
                        <li className='mb-1'><NavLink to='/contact'>Contact</NavLink></li>
                        <li className='mb-1'><NavLink to='/about'>About</NavLink></li>
                        {
                            user && <li><Link to="/dashboard">Dashboard</Link></li>
                        }
                        <li className='my-3'>
                            {
                                user ? <button onClick={logout} className='btn btn-outline text-red-400'>Sing Out</button> :
                                    <NavLink to='/login'>Login</NavLink>
                            }
                        </li>
                    </ul>
                </div>
                <Link to='/home' className="btn btn-ghost normal-case text-xl">Doctors Portal</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {navItems}
                </ul>
            </div>
        </div>
    );
};

export default NavBar;
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {

    const navItems = <>
        <li className='mx-1'><NavLink to='/'>Home</NavLink></li>
        <li className='mx-1'><NavLink  to='/appointment'>Appointment</NavLink></li>
        <li className='mx-1'><NavLink to='/reviews'>Reviews</NavLink></li>
        <li className='mx-1'><NavLink to='/contact'>Contact</NavLink></li>
        <li className='mx-1'><NavLink to='/about'>About</NavLink></li>
        <li className='mx-1'><NavLink to='/login'>Login</NavLink></li>
    </>

    return (
        <div class="navbar px-12">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabIndex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" strokeIinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to='/home' class="btn btn-ghost normal-case text-xl">Doctors Portal</Link>
            </div>
            <div class="navbar-end hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {navItems}
                </ul>
            </div>
        </div>
    );
};

export default NavBar;
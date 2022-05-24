import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png'
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 container mx-auto z-50 relative">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/'>About</Link></li>
                            <li><Link to='/'>Blog</Link></li>
                            <li><Link to='/'>Dashboard</Link></li>
                            <li><Link to='/'>Login</Link></li>

                            <li><Link to='/'>Register</Link></li>

                            <li tabindex="0">
                                <Link to=''>
                                    Theme
                                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </Link>
                                <ul class="p-2 bg-base-100">
                                    <li><Link to=''>Dark</Link></li>
                                    <li><Link to=''>Light</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <Link to='/' className="normal-case text-xl"><img style={{ width: '75px', borderRadius: '50%' }} src={logo} alt="website logo" /></Link>
                </div>


                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 font-semibold ">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/'>About</Link></li>
                        <li><Link to='/'>Blog</Link></li>
                        <li><Link to='/'>Dashboard</Link></li>

                        <li tabindex="0">
                            <Link to=''>
                                Theme
                                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </Link>
                            <ul class="p-2 bg-base-100">
                                <li><Link to=''>Dark</Link></li>
                                <li><Link to=''>Light</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">

                    <ul className="menu menu-horizontal p-0 font-semibold "> <li><Link to='/'>Login</Link></li>


                        <div class="flex flex-col w-full lg:flex-row items-center">
                            <div class="grid flex-grow h-7 card bg-black rounded-box place-items-center w-1"></div>
                            {/* <div class="divider divider-horizontal"></div> */}

                        </div>


                        <li><Link to='/'>Register</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
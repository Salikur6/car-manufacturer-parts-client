import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png'
import './Navbar.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Spinner from '../Hooks/Spinner';
import { signOut } from 'firebase/auth';

const Navbar = ({ dark, setDark }) => {
    const [user, loading] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth)
        localStorage.removeItem('access-token');
    }



    if (loading) {
        return <Spinner></Spinner>
    }
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
                            <li><Link to='/blogs'>Blogs</Link></li>
                            {user && <li><Link to='/dashboard'>Dashboard</Link></li>}
                            <li><Link to='/myportfolio'>My Portfolio</Link></li>

                            <li><Link to='/login'>Login</Link></li>

                            <li><Link to='/register'>Register</Link></li>

                            <li>
                                <label class="swap swap-rotate">
                                    <input type="checkbox" onClick={() => setDark(!dark)} />

                                    <svg class="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                                    <svg class="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                                </label>
                            </li>
                            {/* <li tabIndex="0">
                                <Link to=''>
                                    Theme
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </Link>
                                <ul className="p-2 bg-base-100">
                                    <li>
                                        <button data-set-theme="light" data-act-class="ACTIVECLASS">Light</button>
                                    </li>

                                    <li>
                                        <button data-set-theme="dark" data-act-class="ACTIVECLASS">Dark</button>
                                    </li>
                                </ul>
                            </li> */}
                        </ul>
                    </div>
                    <Link to='/' className="normal-case text-xl"><img style={{ width: '75px', borderRadius: '50%' }} src={logo} alt="website logo" /></Link>
                </div>


                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 font-semibold ">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/blogs'>Blogs</Link></li>
                        {user && <li><Link to='/dashboard'>Dashboard</Link></li>}

                        <li><Link to='/myportfolio'>My Portfolio</Link></li>

                        <label class="swap swap-rotate">
                            <input type="checkbox" onClick={() => setDark(!dark)} />

                            <svg class="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                            <svg class="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                        </label>
                    </ul>
                </div>
                <div className="navbar-end">





                    {user ?
                        <div className='flex'>
                            <p className='font-bold mr-3 mt-3 text-sm text-orange-600 hidden sm:block'>{user?.displayName}'s Account</p>
                            <ul className="menu menu-horizontal p-0 font-semibold ">




                                <div className="flex flex-col w-full lg:flex-row items-center">
                                    <div className="grid flex-grow h-7 card bg-black rounded-box place-items-center w-1"></div>
                                    {/* <div className="divider divider-horizontal"></div> */}
                                </div>
                                <li><Link to='' onClick={handleSignOut}>SignOut</Link></li>



                            </ul>
                        </div>

                        :

                        <ul className="menu menu-horizontal p-0 font-semibold "> <li><Link to='/login'>Login</Link></li>
                            <div className="flex flex-col w-full lg:flex-row items-center">
                                <div className="grid flex-grow h-7 card bg-black rounded-box place-items-center w-1"></div>
                                {/* <div className="divider divider-horizontal"></div> */}
                            </div>
                            <li><Link to='/register'>Register</Link></li>
                        </ul>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;
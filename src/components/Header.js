import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

const Header = () => {
    const menuItems = (
        <>
            <li>
                <Link to={`/`}>Home</Link>
            </li>
        </>
    );

    return (
        <div className="navbar bg-base-100 mb-5 flex items-center justify-around px-24">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        {menuItems}
                    </ul>
                </div>
                <Link to={`/`} className="py-5 pl-5">
                    <img src={logo} alt="" className="w-full" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 font-semibold">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end pr-5">
                <button className="btn btn-outline border-2 text-[#FF3811] hover:border-[#FF3811] border-[#FF3811] hover:bg-[#FF3811] capitalize">
                    Appointment
                </button>
            </div>
        </div>
    );
};

export default Header;

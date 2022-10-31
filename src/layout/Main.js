import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Main = () => {
    return (
        <div>
            <Header />
            <div className="max-w-[1140px] mx-auto mb-10">
                <Outlet />
                <ScrollRestoration />
            </div>
            <Footer />
        </div>
    );
};

export default Main;

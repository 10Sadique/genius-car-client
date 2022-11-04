import React from 'react';
import About from '../components/About';
import Banner from '../components/Banner';
import ContactInfo from '../components/ContactInfo';
import Services from '../components/Services';

const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <Services />
            <ContactInfo />
        </div>
    );
};

export default Home;

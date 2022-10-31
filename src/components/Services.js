import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);

    return (
        <div className="my-14">
            <h2 className="font-bold text-xl text-[#FF3811] text-center mb-5">
                Services
            </h2>
            <h1 className="font-bold text-center mb-5 text-5xl">
                Our Service Area
            </h1>
            <p className="text-gray-500 capitalize mb-12 w-[60%] mx-auto text-center">
                the majority have suffered alteration in some form, by injected
                humour, or randomised words which don't look even slightly
                believable.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {services.map((service) => (
                    <ServiceCard key={service._id} service={service} />
                ))}
            </div>
        </div>
    );
};

export default Services;

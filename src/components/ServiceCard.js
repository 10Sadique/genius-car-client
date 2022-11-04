import React from 'react';
import { HiArrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { img, title, price, _id } = service;
    return (
        <div className="p-3 border rounded-lg shadow-md">
            <div className="w-full h-44 rounded-lg overflow-hidden shadow-md mb-3">
                <img className="w-full h-full object-cover" src={img} alt="" />
            </div>
            <div>
                <h1 className="font-bold text-xl mb-3">{title}</h1>
                <div className="flex items-center text-lg justify-between font-semibold text-[#FF3811]">
                    <p>Price: ${price}</p>
                    <Link to={`/checkout/${_id}`}>
                        <HiArrowRight />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;

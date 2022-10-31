import React from 'react';
import { HiArrowRight } from 'react-icons/hi';

const ServiceCard = ({ service }) => {
    const { img, title, price } = service;
    return (
        <div className="p-3 border rounded-lg shadow-md">
            <div className="w-full h-44 rounded-lg overflow-hidden shadow-md mb-3">
                <img className="w-full h-full object-cover" src={img} alt="" />
            </div>
            <div>
                <h1 className="font-bold text-xl mb-3">{title}</h1>
                <div className="flex items-center text-lg justify-between font-semibold text-[#FF3811]">
                    <p>Price: ${price}</p>
                    <button>
                        <HiArrowRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;

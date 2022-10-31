import React from 'react';
import parts from '../assets/images/about_us/parts.jpg';
import person from '../assets/images/about_us/person.jpg';

const About = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col gap-10 lg:flex-row items-start justify-center p-0">
                <div className="w-full h-full mt-10 relative">
                    <img
                        className="w-4/5 h-full rounded-lg shadow-lg "
                        src={person}
                        alt=""
                    />
                    <img
                        className="absolute top-2/3 left-1/3 w-2/3 shadow-md p-3 bg-white rounded-lg "
                        src={parts}
                        alt=""
                    />
                </div>
                <div className="w-full">
                    <h1 className="text-xl font-bold mb-5 text-[#FF3811]">
                        About us
                    </h1>
                    <h1 className="text-5xl font-bold mb-8 w-[70%]">
                        We are qualified & of experience in this field
                    </h1>
                    <p className="mb-5 text-gray-600 leading-7 w-[80%]">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable.
                    </p>
                    <p className="mb-8 text-gray-600 leading-7 w-[80%]">
                        the majority have suffered alteration in some form, by
                        injected humour, or randomised words which don't look
                        even slightly believable.
                    </p>
                    <button className="btn bg-[#FF3811] border-0 hover:border-0 hover:bg-[#FF3811] capitalize ">
                        Get More Info
                    </button>
                </div>
            </div>
        </div>
    );
};

export default About;

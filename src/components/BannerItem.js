import React from 'react';

const BannerItem = ({ slide }) => {
    const { id, image, prev, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className="relative h-[600px] w-full">
                <img
                    src={image}
                    className="w-full h-full object-cover"
                    alt=""
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-black/30" />
            </div>
            <div className="absolute flex flex-col gap-7 justify-start transform -translate-y-1/2 left-24 top-1/2">
                <h1 className="text-7xl font-bold text-white">
                    Affordable <br />
                    Price for Car <br />
                    Servicing
                </h1>
                <p className="text-white text-lg capitalize">
                    There are many variations of passages of available, but{' '}
                    <br />
                    the majority have suffered alteration in some form
                </p>
                <div className="flex items-center gap-5">
                    <button className="btn bg-[#FF3811] hover:bg-[#FF3811] border-0">
                        Discover More
                    </button>
                    <button className="btn border-white border-2 bg-transparent text-white hover:bg-white hover:text-black hover:border-white">
                        Latest Project
                    </button>
                </div>
            </div>
            <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a
                    href={`#slide${prev}`}
                    className="btn btn-circle bg-[#FF3811]  border-0 hover:border-0"
                >
                    ❮
                </a>
                <a
                    href={`#slide${next}`}
                    className="btn btn-circle bg-[#FF3811]  border-0 hover:border-0"
                >
                    ❯
                </a>
            </div>
        </div>
    );
};

export default BannerItem;

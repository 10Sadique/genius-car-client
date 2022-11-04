import React from 'react';

const ContactInfo = () => {
    return (
        <div className="bg-black text-white px-14 py-20 rounded-lg flex gap-5 items-center justify-between">
            <div>
                <p className="text-sm">We are open monday-friday</p>
                <p className="font-bold text-2xl">7:00 am - 9:00 pm</p>
            </div>
            <div>
                <p className="text-sm">Have a question?</p>
                <p className="font-bold text-2xl">+2546 251 2658</p>
            </div>
            <div>
                <p className="text-sm">Need a repair? our address</p>
                <p className="font-bold text-2xl">Liza Street, New York</p>
            </div>
        </div>
    );
};

export default ContactInfo;

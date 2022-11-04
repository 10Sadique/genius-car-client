import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const CheckOut = () => {
    const service = useLoaderData();
    const { user } = useContext(AuthContext);

    const { title, price, _id, service_id } = service;

    const handleCheckout = (e) => {
        e.preventDefault();
        const form = e.target;

        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'Unregistered';
        const phone = form.phone.value;
        const message = form.message.value;

        const order = {
            service: _id,
            service_id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message,
        };

        // if (phone.length < 11) {
        //     alert('Enter a valid phone number');
        // }

        fetch('https://genius-car-server-beta.vercel.app/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(order),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.acknowledged) form.reset();
            })
            .catch((err) => console.error(err));
    };

    return (
        <div>
            <form
                onSubmit={handleCheckout}
                className="bg-gray-100 rounded-lg shadow-lg p-10 max-w-4xl mx-auto"
            >
                <h1 className="text-4xl font-bold text-gray-800">{title}</h1>
                <div className="mt-5" />
                <h1 className="text-3xl font-bold text-orange-600">
                    Price: ${price}
                </h1>
                <div className="mt-5" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <input
                        required
                        name="firstName"
                        type="text"
                        placeholder="Firat Name"
                        className="input input-bordered w-full"
                    />
                    <input
                        name="lastName"
                        type="text"
                        placeholder="Last Name"
                        className="input input-bordered w-full"
                    />
                    <input
                        required
                        name="phone"
                        type="text"
                        placeholder="Your Phone"
                        className="input input-bordered w-full"
                    />
                    <input
                        name="email"
                        type="text"
                        placeholder="Email"
                        className="input input-bordered w-full"
                        readOnly
                        defaultValue={user.email}
                    />
                </div>
                <div className="mt-5" />
                <textarea
                    name="message"
                    className="textarea textarea-bordered w-full"
                    placeholder="Your Message"
                ></textarea>
                <div className="mt-5" />
                <button
                    className="py-2 px-5 bg-orange-600 text-white font-semibold rounded-md shadow-md shadow-orange-600"
                    type="submit"
                >
                    Proceed Checkout
                </button>
            </form>
        </div>
    );
};

export default CheckOut;

import React, { useContext, useEffect, useState } from 'react';
import TableRow from '../components/TableRow';
import { AuthContext } from '../contexts/AuthProvider';

const Orders = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(
            `https://genius-car-server-beta.vercel.app/orders?email=${user?.email}`
        )
            .then((res) => res.json())
            .then((data) => setOrders(data))
            .catch((err) => console.error(err));
    }, [user?.email]);

    const handleDelete = (id) => {
        const proceed = window.confirm(
            'Are you sure, you want to cancel this order?'
        );

        if (proceed) {
            fetch(`https://genius-car-server-beta.vercel.app/orders/${id}`, {
                method: 'DELETE',
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Order Canceled!!');
                        const remaining = orders.filter(
                            (order) => order._id !== id
                        );
                        setOrders(remaining);
                    }
                })
                .catch((err) => console.error(err));
        }
    };

    const handleStatusUpdate = (id) => {
        fetch(`https://genius-car-server-beta.vercel.app/orders/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ status: 'Approved' }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = orders.filter((ord) => ord._id !== id);
                    const approved = orders.find((ord) => ord._id === id);
                    approved.status = 'Approved';
                    const newOrders = [approved, ...remaining];
                    setOrders(newOrders);
                }
            })
            .catch((err) => console.error(err));
    };

    return (
        <div>
            <h1 className="text-4xl font-bold text-orange-500 text-center">
                You have {orders.length} orders
            </h1>
            <div className="mt-8" />
            <div className="overflow-x-auto w-full border rounded-xl">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr className="divide-x">
                            <th></th>
                            <th>Name</th>
                            <th>Service</th>
                            <th>Status</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <TableRow
                                key={order._id}
                                order={order}
                                handleDelete={handleDelete}
                                handleStatusUpdate={handleStatusUpdate}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;

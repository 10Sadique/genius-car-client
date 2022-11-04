import React, { useContext, useEffect, useState } from 'react';
import TableRow from '../components/TableRow';
import { AuthContext } from '../contexts/AuthProvider';

const Orders = () => {
    const { user, logOut } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(
            `https://genius-car-server-beta.vercel.app/orders?email=${user?.email}`,
            {
                headers: {
                    authorization: `Bearer ${localStorage.getItem(
                        'geniusToken'
                    )}`,
                },
            }
        )
            .then((res) => {
                if (res.status === 401 || res.status === 403) {
                    logOut()
                        .then(() => {
                            console.log(res.status);
                            localStorage.removeItem('geniusToken');
                        })
                        .catch((err) => console.error(err));
                }
                return res.json();
            })
            .then((data) => setOrders(data))
            .catch((err) => console.error(err));
    }, [user?.email, logOut]);

    const handleDelete = (id) => {
        const proceed = window.confirm(
            'Are you sure, you want to cancel this order?'
        );

        if (proceed) {
            fetch(`https://genius-car-server-beta.vercel.app/orders/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem(
                        'geniusToken'
                    )}`,
                },
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
                authorization: `Bearer ${localStorage.getItem('geniusToken')}`,
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
            <h1 className="text-4xl font-bold text-center text-orange-500">
                You have {orders.length} orders
            </h1>
            <div className="mt-8" />
            <div className="w-full overflow-x-auto border rounded-xl">
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

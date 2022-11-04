import React, { useEffect, useState } from 'react';

const TableRow = ({ order, handleDelete, handleStatusUpdate }) => {
    const {
        _id,
        message,
        serviceName,
        price,
        customer,
        phone,
        service,
        status,
    } = order;
    const [orderService, setOrderService] = useState();

    useEffect(() => {
        fetch(`https://genius-car-server-beta.vercel.app/services/${service}`)
            .then((res) => res.json())
            .then((data) => setOrderService(data))
            .catch((err) => console.error(err));
    }, [service]);

    return (
        <tr className="divide-x">
            <th>
                <button
                    onClick={() => handleDelete(_id)}
                    className="bg-red-400 text-white py-2 px-4 rounded-xl"
                >
                    X
                </button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="w-24 rounded-xl">
                            {orderService?.img && (
                                <img
                                    src={orderService.img}
                                    alt="Avatar Tailwind CSS Component"
                                />
                            )}
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customer}</div>
                        <div className="text-sm opacity-50">{phone}</div>
                    </div>
                </div>
            </td>
            <td>
                {serviceName}
                <br />
                <span className="badge bg-orange-500 border-0 badge-md">
                    ${price}
                </span>
            </td>
            <td>
                <button
                    onClick={() => handleStatusUpdate(_id)}
                    className="btn btn-ghost btn-xs"
                >
                    {status ? status : 'Pending'}
                </button>
            </td>
            <th>
                <p>{message}</p>
            </th>
        </tr>
    );
};

export default TableRow;

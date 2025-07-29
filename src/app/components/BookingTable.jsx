"use client"
import Image from 'next/image';
import React from 'react'
import { FaEdit, FaTrash } from "react-icons/fa";

export default function BookingTable({bookings}) {
    console.log(bookings);
    return (
        <div>
             <h2 className="text-2xl font-bold text-gray-800 text-center"> My Bookings
      </h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-xl shadow-md">
                    <thead className="bg-gray-100 text-gray-700 text-left">
                        <tr>
                            <th className="px-4 py-3">#</th>
                            <th className="px-4 py-3">Image</th>
                            <th className="px-4 py-3">Service</th>
                            <th className="px-4 py-3">Date</th>
                            <th className="px-4 py-3">Price</th>
                            <th className="px-4 py-3 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings?.map((booking, index) => (
                            <tr key={booking._id} className="border-b hover:bg-gray-50">
                                <td className="px-4 py-3">{index + 1}</td>
                                <td className="px-4 py-3">
                                    {/* <img
                                        src={booking?.service_img}
                                        alt="Service"
                                        className="w-14 h-14 rounded object-cover"
                                    /> */}
                                    <Image
                                    src={booking?.service_img}
                                    width={80}
                                    height={80}
                                    alt="Service"
                                    className="rounded object-cover"
                                    />
                                </td>
                                <td className="px-4 py-3">{booking?.service_Name}</td>
                                <td className="px-4 py-3">{booking?.date}</td>
                                <td className="px-4 py-3">${booking?.service_Price}</td>
                                <td className="px-4 py-3 flex justify-center gap-3">
                                    <button
                                        className="text-blue-500 hover:text-blue-700"
                                        // onClick={() => handleEdit(booking._id)}
                                    >
                                        <FaEdit />
                                    </button>
                                    <button
                                        className="text-red-500 hover:text-red-700"
                                        // onClick={() => handleDelete(booking._id)}
                                    >
                                        <FaTrash />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

// Replace with your own handler logic
// const handleEdit = (id) => {
//   console.log("Edit booking:", id);
// };

// const handleDelete = (id) => {
//   console.log("Delete booking:", id);
// };

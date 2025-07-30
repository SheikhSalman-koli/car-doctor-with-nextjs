"use client"

import { useRouter } from 'next/navigation';
import React from 'react'
import { FaTrash } from 'react-icons/fa6';

export default function BookingDeleteButton({ id }) {
    const router = useRouter()

    const handleDelete = async (id) => {
        const res = await fetch(`https://car-doctor-with-nextjs-teal.vercel.app/api/service/${id}`, {
            method: "DELETE",
        })
        const result = await res.json()
        console.log("Delete booking:", result);
        router.refresh()
    };

    return (
        <div>
            <button
                className="text-red-500 hover:text-red-700"
                onClick={() => handleDelete(id)}
            >
                <FaTrash />
            </button>
        </div>
    )
}

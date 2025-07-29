import React from 'react'
import { FaTrash } from 'react-icons/fa6';

export default function BookingDeleteButton({id}) {

    const handleDelete =async (id) => {
        
        const res =await fetch(`http://localhost:3000/api/service/${id}`,{
            method: "DELETE",
            
        }) 
        const result =await res.json()
        console.log("Delete booking:", result);
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

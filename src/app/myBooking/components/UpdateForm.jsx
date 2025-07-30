"use client"
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react'
import toast from 'react-hot-toast';

export default function UpdateForm({data}) {
    const {data: session} = useSession()
    const router = useRouter()

      const handleUpdate =async(e) => {
        e.preventDefault()
        const form = e.target
        const date = form.date.value
        const phone = form.phone.value
        const address = form.address.value

        const payload = { 
            date, 
            phone, 
            address,

        }

        const res =await fetch(`http://localhost:3000/api/my-booking/${data?._id}`, {
            method: "PATCH",
            body: JSON.stringify(payload)
        })
        const updatedData =await res.json()
        if(updatedData?.modifiedCount){
            toast.success("your order is Updated!")
        }
        router.push("/myBooking")
        // console.log(updatedData);
    }

    

    return (
        <div className='mt-10 space-y-6'>

            <h1 className='text-3xl font-bold text-center'>Update Booking of {data?.service_Name}</h1>
            <div className="max-w-4xl mx-auto p-6 bg-[#F3F3F3] shadow-md rounded-lg ">
                <form
                    onSubmit={handleUpdate}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            defaultValue={session?.user?.name}
                            type="text"
                            id="name"
                            name="name"
                            className="mt-1 block w-full border border-gray-300 bg-white rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            required
                            readOnly
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            defaultValue={session?.user?.email}
                            type="email"
                            id="email"
                            name="email"
                            className="mt-1 block w-full border border-gray-300 bg-white rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            required
                            readOnly
                        />
                    </div>

                    {/* Due Amount */}
                    <div>
                        <label htmlFor="due" className="block text-sm font-medium text-gray-700">
                            Due Amount
                        </label>
                        <input
                            defaultValue={data?.service_Price}
                            type="number"
                            id="due"
                            name="due"
                            className="mt-1 block w-full border border-gray-300 bg-white rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            required
                            readOnly
                        />
                    </div>

                    {/* Date */}
                    <div>
                        <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                            Date
                        </label>
                        <input
                        defaultValue={data?.date}
                            type="date"
                            id="date"
                            name="date"
                            className="mt-1 block w-full border border-gray-300 bg-white rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                            Phone
                        </label>
                        <input
                        defaultValue={data?.phone}
                            type="tel"
                            id="phone"
                            name="phone"
                            className="mt-1 block w-full border border-gray-300 bg-white rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>

                    {/* Present Address */}
                    <div>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                            Present Address
                        </label>
                        <input
                        defaultValue={data?.address}
                            type="text"
                            id="address"
                            name="address"
                            className="mt-1 block w-full border border-gray-300 bg-white rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>

                    {/* Full-width Submit Button */}
                    <div className="md:col-span-2">
                        <button
                            type="submit"
                            className="w-full bg-[#FF3811] text-white py-2 px-4 rounded-md  transition"
                        >
                           Update Order
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

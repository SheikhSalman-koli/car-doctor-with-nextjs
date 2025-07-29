"use client"
import { useSession } from 'next-auth/react'
import React from 'react'
import toast from 'react-hot-toast'

export default function CheckoutForm({ data }) {
    const { data: session } = useSession()

    const handleConfirm =async(e) => {
        e.preventDefault()
        const form = e.target
        // from session
        const name = form.name.value
        const email = form.email.value
        // user input
        const date = form.date.value
        const phone = form.phone.value
        const address = form.address.value

        const payload = { 
            name, 
            date, 
            email,
            phone, 
            address,
    //     extra 
            id: data?._id,
            service_Price : data?.price,
            service_Name : data?.title,
            service_img : data?.img
        }

        const res =await fetch(`http://localhost:3000/api/service`, {
            method: "POST",
            body: JSON.stringify(payload)
        })
        const postedData =await res.json()
        if(postedData?.insertedId){
            toast.success("your order is confirmed!")
            form.reset()
        }
    }


    return (
        <div className='mt-10 space-y-6'>
           
            <h1 className='text-3xl font-bold text-center'>Book Service For: {data?.title}</h1>
            <div className="max-w-4xl mx-auto p-6 bg-[#F3F3F3] shadow-md rounded-lg ">
                <form
                    onSubmit={handleConfirm}
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
                            defaultValue={data?.price}
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
                            Confirm Order
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

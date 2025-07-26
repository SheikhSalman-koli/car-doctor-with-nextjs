
import connetDB from '@/lib/dbConnet';
import Image from 'next/image';
import React from 'react'

export default async function Services() {
    const services = connetDB('cars')
    const data = await services.find().toArray()
    console.log(data);
    // console.log(data);
    return (
        <div className='max-w-11/12 mx-auto mt-12'>
            <div className='max-w-2xl mx-auto text-center space-y-5 mb-4'>
                <p className='text-[#FF3811]'>Service</p>
                <h2 className='text-5xl font-bold'>Our Service Area</h2>
                <p className='text-base text-[#737373]'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {data.map((item) => {
                    return <div 
                    className='p-4 space-y-5 border-1 border-gray-300 rounded-lg'
                    key={item._id}>
                     {/* <Image
                     src={item.img}
                     width={380}
                     height={208}
                      className='rounded-lg'
                     alt="services image"
                     /> */}
                     <img
                     className='w-full h-52 rounded-lg'
                     src={item?.img} alt="services image" />

                    <h2 className='font-bold text-2xl'>{item?.title}</h2>
                    <p className='text-[#FF3811] text-[20px] font-semibold'>Price: ${item?.price}</p>
                    </div>
                })}
            </div>
        </div>
    )
}


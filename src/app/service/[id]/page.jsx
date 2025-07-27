import connetDB, { collectionName } from '@/lib/dbConnet'
import { ObjectId } from 'mongodb'
import Image from 'next/image'
import React from 'react'
import banner from '../../../../public/assets/images/checkout/checkout.png'

export default async function DetailsPage({params}) {

    const id =await params.id
    const service = connetDB(collectionName.SERVICES)
    const data =await service.findOne({_id : new ObjectId(id)})
  return (
    <div className='max-w-11/12 mx-auto space-y-8'>
        <section className='mt-12 flex justify-center mx-auto'>
            <figure className='relative'>
                <Image
                 src={banner}
                 width={1137}
                 height={300}
                 alt='banner'
                />
                <div className='gradient absolute w-[1137px] h-[300px] top-0'>
                    <div className='flex items-center ps-25 w-full h-full'>
                        <p className='text-white font-bold text-4xl'>Services Details</p>
                  {/* <p className='text-white pt-9'>home</p/> */}
                    </div>
                </div>
            </figure>
        </section>
        <div className='lg:grid grid-cols-12 gap-5 '>
            <div className='col-span-8'>
                <Image
                src={data?.img}
                width={752}
                height={400}
                alt={data?.title}
                />
            </div>

            <div className='col-span-4'>
            <button
            className='bg-[#FF3811] text-white w-full btn'
            >Checkout</button>
            <p className='font-bold text-2xl text-center'>Price ${data?.price}</p>
            </div>
        </div>
       
    </div>
  )
}

// "use client"
import CheckoutForm from '@/app/components/CheckoutForm';
import React from 'react'

export default async function CheckOutPage({params}) {

   const id =await params?.id;
    // console.log(id);
    const res = await fetch(`${process.env.BASE_URL}/api/service/${id}`)
    const data = await res.json()

  return (
    <div>
        <CheckoutForm data={data}/>
    </div>
  )
}

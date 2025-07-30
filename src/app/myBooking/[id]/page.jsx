import React from 'react'
import UpdateForm from '../components/UpdateForm';
import { headers } from 'next/headers';

export default async function UpdatePage({params}) {

    const id =await params?.id

    const res =await fetch(`https://car-doctor-with-nextjs-teal.vercel.app/api/my-booking/${id}`,{
        headers: new Headers(await headers())
    })
    const data = await res.json()


    // console.log(data);
  return (
    <div>
        <UpdateForm data={data}/>
    </div>
  )
}

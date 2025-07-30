import React from 'react'
import UpdateForm from '../components/UpdateForm';
import { headers } from 'next/headers';

export default async function UpdatePage({params}) {

    const id =await params?.id

    const res =await fetch(`http://localhost:3000/api/my-booking/${id}`,{
        headers: await headers()
    })
    const data = await res.json()


    // console.log(data);
  return (
    <div>
        <UpdateForm data={data}/>
    </div>
  )
}

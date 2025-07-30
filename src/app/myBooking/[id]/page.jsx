import React from 'react'
import UpdateForm from '../components/UpdateForm';

export default async function UpdatePage({params}) {

    const id =await params?.id

    const res =await fetch(`http://localhost:3000/api/my-booking/${id}`)
    const data = await res.json()


    // console.log(data);
  return (
    <div>
        <UpdateForm data={data}/>
    </div>
  )
}

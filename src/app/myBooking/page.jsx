// "use client"
// import React, { useEffect, useState } from 'react'
import { headers } from 'next/headers'
import BookingTable from '../components/BookingTable'

const fetchBooking = async () => {
  const res = await fetch(`http://localhost:3000/api/service`, {
    headers:await headers()
  })
  const d = await res.json()
  return d
}

export default async function MyBookingPage() {

  // // make these commented for convert client to server for auto update after delete
  // const [data, setData] = useState()
  // useEffect(()=>{

  // },[])

  const data = await fetchBooking()
  return (
    <div className='p-8'>
      <BookingTable bookings={data} />
    </div>
  )
}

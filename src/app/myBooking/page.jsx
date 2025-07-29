"use client"
import React, { useEffect, useState } from 'react'
import BookingTable from '../components/BookingTable'

export default function MyBookingPage() {

    const [data, setData] = useState()

    useEffect(()=>{
        const fetchBooking =async()=>{
            const res =await fetch(`http://localhost:3000/api/service`)
            const d =await res.json()
            setData(d)
        }
        fetchBooking()
    },[])


  return (
    <div>
        <BookingTable bookings={data}/>
    </div>
  )
}

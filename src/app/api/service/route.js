import { authOptions } from "@/lib/authOptions";
import connetDB, { collectionName } from "@/lib/dbConnet";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server"

export const POST =async (req) => {
    const body =await req.json()
    // console.log(body);
    const bookingCollection = connetDB(collectionName.BOOKING)
    const result = await bookingCollection.insertOne(body)
    return NextResponse.json(result)
}

export const GET =async()=>{

const session =await getServerSession(authOptions)
if(session){
    const email = session?.user?.email
    const bookingCollection = connetDB(collectionName.BOOKING)
    const result = await bookingCollection.find({email}).toArray()

    return NextResponse.json(result)
}

}


 
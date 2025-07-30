
import connetDB, { collectionName } from "@/lib/dbConnet"
import { ObjectId } from "mongodb"
import { revalidatePath } from "next/cache"
import { NextResponse } from "next/server"

export const GET = async(req, {params}) => {

    const bookingCollection = connetDB(collectionName.BOOKING)
    const id = await params?.id
    const query = {_id: new ObjectId(id)}

    const result = await bookingCollection.findOne(query)

    return NextResponse.json(result)
}


export const PATCH =async(req, {params})=> {
     const bookingCollection = connetDB(collectionName.BOOKING)
    const id = await params?.id
    const query = {_id: new ObjectId(id)}

    const hasToUpdate =await req.json()

    const updatedDoc = {
        $set: {...hasToUpdate}
    }

    const option = {
        upsert : true
    }
    const result =await bookingCollection.updateOne(query, updatedDoc, option)
    revalidatePath("/myBooking")
    return NextResponse.json(result)
}

import connetDB, { collectionName } from "@/lib/dbConnet"
import { ObjectId } from "mongodb"
import { NextResponse } from "next/server"

export const GET = async(req, {params}) => {

    const bookingCollection = connetDB(collectionName.BOOKING)
    const id = await params?.id
    const query = {_id: new ObjectId(id)}

    const result = await bookingCollection.findOne(query)

    return NextResponse.json(result)
}
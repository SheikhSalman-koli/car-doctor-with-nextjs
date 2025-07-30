
import { authOptions } from "@/lib/authOptions"
import connetDB, { collectionName } from "@/lib/dbConnet"
import { ObjectId } from "mongodb"
import { getServerSession } from "next-auth"
import { revalidatePath } from "next/cache"
import { NextResponse } from "next/server"

export const GET = async (req, { params }) => {

    const bookingCollection = connetDB(collectionName.BOOKING)
    const id = await params?.id
    const query = { _id: new ObjectId(id) }

    const session = await getServerSession(authOptions)
    const result = await bookingCollection.findOne(query)
    const isOwnerOk = session?.user?.email === result?.email

    if (isOwnerOk) {
        return NextResponse.json(result)
    } else {
        return NextResponse.json({ message: "Forbidden action", status: 403 })
    }

}


export const PATCH = async (req, { params }) => {
    const bookingCollection = connetDB(collectionName.BOOKING)
    const id = await params?.id
    const query = { _id: new ObjectId(id) }

    const hasToUpdate = await req.json()
    const updatedDoc = {
        $set: { ...hasToUpdate }
    }
    const option = {
        upsert: true
    }

    const session = await getServerSession(authOptions)
    const currentBooking = await bookingCollection.findOne(query)
    const isOwnerOk = session?.user?.email === currentBooking?.email

    if (isOwnerOk) {
        const result = await bookingCollection.updateOne(query, updatedDoc, option)
        revalidatePath("/myBooking")
        return NextResponse.json(result)
    } else {
        return NextResponse.json({ message: "Forbidden action", status: 403 })
    }

}
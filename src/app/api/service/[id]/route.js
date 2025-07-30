import { authOptions } from "@/lib/authOptions"
import connetDB, { collectionName } from "@/lib/dbConnet"
import { ObjectId } from "mongodb"
import { getServerSession } from "next-auth"
import { revalidatePath } from "next/cache"
import { NextResponse } from "next/server"

export const GET = async (req, {params}) => {
    const id =await params?.id
    const service = connetDB(collectionName.SERVICES)
    const data =await service.findOne({_id : new ObjectId(id)})
    return NextResponse.json(data)
}

export const DELETE =async(req, {params})=>{
    const id = await params?.id
    const query = {_id : new ObjectId(id)}
    const bookingCollection = connetDB(collectionName.BOOKING)
// Validation 
    const session =await getServerSession(authOptions)
    const currentBooking =await bookingCollection.findOne(query)
    const isOwnerOK = session?.user?.email === currentBooking?.email 

    if(isOwnerOK){
        const deletedOrder = await bookingCollection.deleteOne(query)
        revalidatePath("myBooking")
        return NextResponse.json(deletedOrder)
    } else {
        return NextResponse.json({success: false, message: "Forbidden access"})
    }
}

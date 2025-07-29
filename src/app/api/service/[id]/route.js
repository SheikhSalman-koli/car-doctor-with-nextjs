import connetDB, { collectionName } from "@/lib/dbConnet"
import { ObjectId } from "mongodb"
import { NextResponse } from "next/server"

export const GET = async (req, {params}) => {
    const id =await params?.id
    const service = connetDB(collectionName.SERVICES)
    const data =await service.findOne({_id : new ObjectId(id)})
    return NextResponse.json(data)
}

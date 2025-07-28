"use server"
import connetDB, { collectionName } from "@/lib/dbConnet";
import bcrypt from 'bcrypt'

export default async function isRegistered(payload) {
    
    const userCollection = connetDB(collectionName.USERS)
    const {email, password} = payload
    const user = await userCollection.findOne({email})

    if(!user) return null
    const isPasswordOk =await bcrypt.compare( password, user?.password)
    if(!isPasswordOk) return null

    return user
}
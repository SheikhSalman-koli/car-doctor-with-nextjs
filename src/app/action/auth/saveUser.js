'use server';
import connetDB, { collectionName } from "@/lib/dbConnet"
import bcrypt from 'bcrypt'

export const saveUser =async(payload)=> {
    const database = connetDB(collectionName.USERS)

    const {email, pass} = payload
    if(!email || !pass){
        return {success: false}
    }

    const user = await database.findOne({email: payload?.email})

    if(!user){
        const hashPassword = await bcrypt.hash(pass, 10)
        payload.pass = hashPassword
        const result = await database.insertOne(payload)
          return {
            acknowledged: result.acknowledged,
            insertedId: result.insertedId.toString()
        }
    }else{
        return {message: "user already exist"}
    }
    
}
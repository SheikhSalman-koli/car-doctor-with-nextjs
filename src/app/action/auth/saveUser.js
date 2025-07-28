'use server';
import connetDB, { collectionName } from "@/lib/dbConnet"
import bcrypt from 'bcrypt'

export const saveUser =async(payload)=> {
    const database = connetDB(collectionName.USERS)

    const {email, password} = payload
    if(!email || !password){
        return {success: false}
    }

    const user = await database.findOne({email: payload?.email})

    if(!user){
        const hashPassword = await bcrypt.hash(password, 10)
        payload.password = hashPassword
        const result = await database.insertOne(payload)
        //   return {
        //     acknowledged: result.acknowledged,
        //     insertedId: result.insertedId.toString()
        // }
        result.insertedId = result.insertedId.toString()
        return result
    }else{
        return {message: "user already exist"}
    }
    
}
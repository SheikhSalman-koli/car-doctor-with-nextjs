
import { MongoClient, ServerApiVersion } from 'mongodb';

export const collectionName = {
  SERVICES : "cars",
  USERS : "users"
}

export default function connetDB(collectionName){

const uri = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.dclhmji.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

return client.db(process.env.DBNAME).collection(collectionName)
}
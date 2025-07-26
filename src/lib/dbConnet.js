
import { MongoClient, ServerApiVersion } from 'mongodb';


export default function connetDB(collectionName){

const uri = `mongodb+srv://practice-next-js:DvRpvJ7AptcvMJZs@cluster0.dclhmji.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

return client.db(process.env.DBNAME).collection(collectionName)
}
import mongoose from 'mongoose'

export default async function dbConnect(){
    try {
        const db =await mongoose.connect("mongodb://localhost:27017/order")
        console.log("connected with mongoDB");
        return db;
    } catch (error) {
        console.log("No connection");
    }
    
}

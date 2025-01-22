import mongoose from "mongoose";

export const dbConnection = () =>{
    mongoose.connect(process.env.MONGODB_URL,{
        dbName:"MERN_AUTH",
    }).then(()=>console.log("connection successfull")).catch((err)=> console.error(err))
}
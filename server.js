import express, { urlencoded } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
import cookieParser from 'cookie-parser'

// database connection import and use
import { dbConnection } from './config/mogodb.js'
dbConnection()

// import the controller
import authRouter from './routes/authRoutes.js'


// initating the server using the express
const app = express();


// assign the port number from the environment variable
const PORT = process.env.PORT || 4000


// middleware are here
app.use(express.json())
app.use(cookieParser())
app.use(cors({credentials:true}))

// API endpoints


// this is the home routes
app.get("/",(req,res)=>{
    res.send("API is working wow")
})

app.use('/api/auth',authRouter)


// activating the server
app.listen(PORT,()=>{
    console.log(`port is listing on the ${PORT}`)
})
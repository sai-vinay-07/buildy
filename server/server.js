const express = require('express')
const cors = require('cors')
const mongoose = require("mongoose")
const dotenv = require('dotenv')
const userRouter = require('./router/userRouter');

dotenv.config()
const app = express()

mongoose.set('strictQuery', false); // Suppress Mongoose warning

mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
    console.log('MONGODB CONNECTED SUCCESSFULLY')
})
.catch((error)=>{
    console.log("MONGODB CONNECTED FAILED!", error) // Log error details
})

//Middleware
app.use(cors())
app.use(express.json())


app.use('/api/users', userRouter);

app.listen(process.env.PORT,()=>{
    console.log("Server is running at port 5000")
})
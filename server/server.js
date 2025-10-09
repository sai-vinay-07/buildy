const express = require('express')
const cors = require('cors')
const mongoose = require("mongoose")
const dotenv = require('dotenv')
const adminRouter = require('./router/adminRoutes')
const projectRouter = require('./router/projectRoutes')
// const { addProject } = require('./controllers/projectController')

dotenv.config()
const app = express()



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


app.use('/api/admin', adminRouter);
app.use('/api/project',projectRouter);

app.get('/',(req, res)=>{
    res.send('This is the Base Router');
})

// app.listen(process.env.PORT,()=>{
//     console.log(`Server is running at port ${process.env.PORT}`)
// })

module.exports = app;

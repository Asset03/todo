const express = require('express')
const connectDB = require('./db')
require("dotenv").config()

const app = express();

const PORT = 3000;

const router = require('./routes/route');

//middleware for taaking data
app.use(express.json())
app.use(express.static('./public'))



app.use("/api/v1/tasks",router)



const start = async ()=>{
    try {
        await connectDB(process.env.DB_URL)
        app.listen(PORT,console.log(`Server started on PORT ${PORT}...`))
    } catch (error) {
        console.log(error);
    }
}

start()
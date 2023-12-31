const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/post")
const cors = require('cors')


dotenv.config();

const connect = async ()=> {
    try {
       await mongoose.connect(process.env.MONGO_URL);
       console.log("DB connected")
     } catch (error) {
       throw (error);
     } 
    };
    mongoose.connection.on("disconnected", ()=>{
       console.log("mongoDB disconnected")
    })

    //middleware

app.use(express.json());
app.use(helmet());
app.use(morgan());
app.use(cors())


app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)
app.use("/api/posts", postRoute)
app.listen(8800, ()=>{
    connect()
    console.log("Backend server is running")
})

import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors'
import {dbConnection} from "./Config/dbConnection.js";
import userRoutes from "./Routes/userRoutes.js";
const app = express();
const PORT = process.env.PORT

dotenv.config();
app.use(cors())
app.use(express.json());

//connecting the DB
dbConnection();
app.use('/api/user',userRoutes)
console.log(PORT)
app.listen(PORT,()=>{
    console.log("server started")
})


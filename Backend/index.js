
import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors'

const PORT = process.env.PORT
const app = express();
dotenv.config();

app.use(cors())
app.use(express.json());
app.use('/api/user',require("./Routes/userRoutes"))

app.listen(PORT,()=>{
    console.log("server started")
})


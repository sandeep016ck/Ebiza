  
import mongoose from 'mongoose';

export const dbConnection = async() => {
    try {
        const connect = await mongoose.connect(process.env.CONNECT_STRING);
        console.log(
            "DB connected successfully",
            connect.connection.host,
            connect.connection.name
        )
    } catch (error) {
        console.log("error is connecting the db")
    }
}
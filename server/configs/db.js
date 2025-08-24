import mongoose from "mongoose";


const connectDB = async () =>{
    try {
        mongoose.connection.on('connected', ()=> console.log("Database Connected")
        )
        await mongoose.connect(process.env.DB_URL)
    } catch (error) {
        console.log(error.message);
    }
}

export default connectDB;
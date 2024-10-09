import mongoose from "mongoose"

// Password: 0WJt9bJO5KJeXDr6

const connectToMongoDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error connecting to MongoDB",error.message);
    }
};

export default connectToMongoDB;
import mongoose from "mongoose";

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB Atlas ✅");
    } catch (error) {
        console.log("Error connecting to MongoDB ❌", error.message);
        process.exit(1); // Exit if database connection fails
    }
};

export default connectToMongoDB;
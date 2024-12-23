import mongoose from "mongoose";

 const connectToMongoDb = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_DB_URI,);
    console.log(`MongoDb connected: ${connection.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};

export default connectToMongoDb;


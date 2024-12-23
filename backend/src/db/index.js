import mongoose from "mongoose";
import { DB_NAME } from "../contants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\nMONGODB connected !! DB host: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log(`mongoDB connection ERROR`, error);
    process.exit(1);
  }
};
export default connectDB;

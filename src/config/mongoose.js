import mongoose from "mongoose";
import { MONGO_URI } from "./config.js";

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI || process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("[database]: connected database".blue);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

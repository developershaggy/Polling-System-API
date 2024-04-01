import mongoose from "mongoose";

const baseUrl = process.env.MONGODB || "0.0.0.0:27017";
const url = "mongodb://localhost:27017";
export const connectToDb = async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected using mongoose");
  } catch (error) {
    console.log(error);
  }
};

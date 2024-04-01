import mongoose from "mongoose";

const baseUrl = process.env.MONGODB || "0.0.0.0:27017";
const url = "mongodb+srv://shaggy:gtavice@cluster0.360a3kz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/polling_api";
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

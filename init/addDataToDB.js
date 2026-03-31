import mongoose from "mongoose";
import Cars from "../models/carSchema.js";
import carData from "./data.js";

const MONGO_URL = "mongodb://127.0.0.1:27017/YourRide";

// DB Connection
async function connectDB() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("✅ MongoDB Connected");
  } catch (err) {
    console.log("❌ DB Connection Error:", err);
  }
}

// Insert Data
async function addData() {
  try {
    const car = await Cars.insertMany(carData);
    console.log("🚗 Car Inserted Successfully:");
    console.log(car);
  } catch (err) {
    console.log("❌ Insert Error:", err);
  } finally {
    await mongoose.connection.close();
    console.log("🔌 DB Connection Closed");
  }
}

await connectDB();
await addData();

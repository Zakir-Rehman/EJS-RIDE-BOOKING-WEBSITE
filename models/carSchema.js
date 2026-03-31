
import mongoose from "mongoose";
const carSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    modelYear: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ["Economy", "Luxury", "Sedan", "SUV", "7-Seater"]
    },
    fuelType: {
        type: String,
        required: true,
        enum: ["Petrol", "Diesel", "Hybrid", "Electric"]
    },
    features: {
        type: [String],
        default: []
    },
    transmission: {
        type: String,
        required: true,
        enum: ["Automatic", "Manual"]
    },
    seats: {
        type: Number,
        required: true
    },
    pricePerDay: {
        type: Number,
        required: true
    },
    location: {
        cities: {
            type: [String],
            required: true
        },
        city: {
            type: String,
            required: true
        },
        area: String,
    },
    images: [
        {

            type: String,
            required: true
        }
    ],
    available: {
        type: Boolean,
        default: true
    },

    rating: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    withDriver: {
        type: Boolean,
        default: true
    },
    totalTrips: {
        type: Number,
        default: 0
    }
})
const Cars = mongoose.models.car || mongoose.model("car", carSchema);
export default Cars
export const CATEGORY_ENUM = ["Economy", "Luxury", "Sedan", "SUV", "7-Seater"];
export const FUEL_ENUM = ["Petrol", "Diesel", "Hybrid", "Electric"];
export const TRANSMISSION_ENUM = ["Automatic", "Manual"];

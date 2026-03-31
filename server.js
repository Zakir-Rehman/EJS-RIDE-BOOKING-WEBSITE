// ================= IMPORTS =================
import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import session from "express-session"
import dotenv from "dotenv"
import multer from "multer"
import { body, validationResult } from "express-validator"
import morgan from "morgan"
import expressEjsLayouts from "express-ejs-layouts"
import { connectDB } from "./config/db.js"
import path from "path"
import Cars from "./models/carSchema.js"
import {
    CATEGORY_ENUM,
    FUEL_ENUM,
    TRANSMISSION_ENUM
} from "./models/carSchema.js";
import { title } from "process"
import mainRouter from "./routes/mainRouter.js"
import errorHandler from "errorhandler"
// ================= CONFIG =================
dotenv.config()
const app = express()

// ================= MIDDLEWARE =================
app.use(cors()) // different origin se request allow
app.use(bodyParser.json()) // JSON data read
app.use(bodyParser.urlencoded({ extended: true })) // form data read
app.use(cookieParser()) // cookies read
app.use(express.static("public"))
app.use(morgan("dev"))
app.use(expressEjsLayouts)
app.set("layout", "layouts/index")
app.use("/uploads", express.static("uploads"))
// Database connect 
connectDB()
// ================= SESSION =================
app.use(
    session({
        secret: "mysecretkey",
        resave: false,
        saveUninitialized: true,
    })
)

// ================= VIEW ENGINE =================
app.set("view engine", "ejs")

// ================= DATABASE =================
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err))

// ================= MULTER (File Upload) =================
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/")
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        const name = path.basename(file.originalname, ext);
        cb(null, name, "-" + Date.now() + ext)

    },
})
const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
        cb(null, true);
    } else {
        cb(new Error("Only Image Files Are Allowed!"), false)
    }
};
const upload = multer({ storage: storage, fileFilter: fileFilter })

// ================= ROUTES =================

// Home page (Triggered)
// app.get("/", (req, res) => {
//     res.render("pages/home.ejs", { title: "YourRide – Your Journey, Your Way" })
// })
// app.get("/vehicles", async (req, res) => {
//     const allVehicles = await Cars.find()
//     console.log(allVehicles)
//     res.render("pages/vehicles.ejs", { title: "Vehicles - YourRide", allVehicles })
// })
// (Triggered)
// app.get("/self-drives", (req, res) => {
//     res.render("pages/selfDrives.ejs", { title: "SelfDrives - YourRide" })
// })
// (Triggered)
app.get("/contact", (req, res) => {
    res.render("pages/contact.ejs", { title: "Contact - YourRide" })
})
// (Triggered)
// app.get("/faqs", (req, res) => {
//     res.render("pages/faq.ejs", { title: "FAQs - YourRide" })
// })
// /searched first
// app.get("/searched", async (req, res) => {
//     const {
//         pickupLocation,
//         returnLocation,
//         pickupDate,
//         pickupTime,
//         returnDate,
//         returnTime,
//     } = req.query;
//     const pickupDateTime = new Date(`${pickupDate}T${pickupTime}`);
//     const returnDateTime = new Date(`${returnDate}T${returnTime}`);
//     console.log(`pickup Date & Time ${pickupDateTime}\n Return Date & Time ${returnDateTime}`)
//     const cars = await Cars.find({
//         "location.cities": {
//             $regex: new RegExp(pickupLocation, "i")
//         }
//     });

//     res.render("pages/searched.ejs", {
//         cars,
//         pickupLocation,
//         returnLocation,
//         pickupDate,
//         pickupTime,
//         returnDate,
//         returnTime,
//         title: "Searched - YourRide"
//     });
// });
//searched second 
// app.get("/searched", async (req, res) => {
//     let {
//         pickupLocation,
//         returnLocation,
//         pickupDate,
//         pickupTime,
//         returnDate,
//         returnTime,
//         pickupDateTime,
//         returnDateTime,

//         // 🔹 filters
//         category,
//         fuelType,
//         transmission,
//         maxPrice,
//         sort
//     } = req.query;
//     console.log(`Book Now : Pickup Date & Time ${pickupDateTime} Return Date & Time ${returnDateTime}`)
//     // 🔹 Safety: agar duplicate name ho to array aa jaye to pehla le lo
//     if (Array.isArray(pickupLocation)) pickupLocation = pickupLocation[0];
//     if (Array.isArray(returnLocation)) returnLocation = returnLocation[0];

//     let filter = {};

//     // 🔹 mandatory search condition
//     if (pickupLocation && pickupLocation.trim() !== "") {
//         filter["location.cities"] = { $regex: pickupLocation.trim(), $options: "i" };
//     }

//     // 🔹 optional filters
//     if (category) filter.category = category;
//     if (fuelType) filter.fuelType = fuelType;
//     if (transmission) filter.transmission = transmission;
//     if (maxPrice) filter.pricePerDay = { $lte: Number(maxPrice) };

//     // 🔹 sorting
//     let sortOption = {};
//     if (sort === "low") sortOption.pricePerDay = 1;
//     else if (sort === "high") sortOption.pricePerDay = -1;

//     try {
//         const cars = await Cars.find(filter).sort(sortOption);

//         res.render("pages/searched", {
//             title: "Searched - YourRide",
//             cars,

//             // search info
//             pickupLocation,
//             returnLocation,
//             pickupDate,
//             pickupTime,
//             returnDate,
//             returnTime,

//             // filters for EJS selected states
//             filters: req.query
//         });
//     } catch (error) {
//         console.error("Error fetching searched cars:", error);
//         res.status(500).send("Server Error. Please try again later.");
//     }
// });
// app.post("/searched", async (req, res) => {
//     let {
//         searchLocation,
//         category,
//         transmission,
//         fuelType

//     } = req.body
//     let filter = {};

//     // 🔹 mandatory search condition
//     if (searchLocation && searchLocation.trim() !== "") {
//         filter["location.cities"] = { 
//             $regex: //partical match - i.e (use search : lah that match all of this [Lahore,LAHORE,lahore])
//              searchLocation.trim(), 
//              $options: "i" }; //capital small are equal
//     }
//     if (category && category !== "All") {
//     filter.category = category;
// }

//     let searchTarget = await Cars.find(filter)
//     console.log(searchTarget)

// })

app.get("/searched", async (req, res) => {
    try {
        const {
            pickupLocation,
            category,
            transmission,
            fuelType,
            maxPrice,
            sort
        } = req.query;

        let filter = {};

        // 📍 Location (regex search)
        if (pickupLocation && pickupLocation.trim() !== "") {
            filter["location.cities"] = {
                $regex: pickupLocation.trim(),
                $options: "i"
            };
        }

        // 🎯 Category
        if (category && category !== "All") {
            filter.category = category;
        }

        // ⚙ Transmission
        if (transmission && transmission !== "All") {
            filter.transmission = transmission;
        }

        // ⛽ Fuel
        if (fuelType && fuelType !== "All") {
            filter.fuelType = fuelType;
        }

        // 💰 Max Price
        if (maxPrice) {
            filter.pricePerDay = { $lte: Number(maxPrice) };
        }

        // 🔃 Sort
        let sortOption = {};
        if (sort === "low") sortOption.pricePerDay = 1;
        if (sort === "high") sortOption.pricePerDay = -1;

        const cars = await Cars.find(filter).sort(sortOption);

        res.render("pages/searched", {
            title: "Searched - YourRide",
            cars,
            pickupLocation: pickupLocation || "",
            filters: {
                category,
                transmission,
                fuelType,
                maxPrice,
                sort
            }
        });

    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
});






app.get("/vehicles/car/:id", async (req, res) => {
    const car = await Cars.findById(req.params.id);

    res.render("pages/showCar", {
        car,
        title: car ? `${car.name} - YourRide` : "YourRide"

    });
});
// first vehicels route
// app.get("/vehicles", async (req, res) => {
//     const { category, transmission, fuelType, city, maxPrice } = req.query;

//     let filter = {};

//     if (category) filter.category = category;
//     if (transmission) filter.transmission = transmission;
//     if (fuelType) filter.fuelType = fuelType;
//     if (city) filter["location.city"] = city;
//     if (maxPrice) filter.pricePerDay = { $lte: Number(maxPrice) };

//     const allVehicles = await Cars.find(filter);

//     res.render("pages/vehicles", {
//         title: "Vehicles - YourRide",
//         allVehicles,
//         filters: req.query,
//         categories: CATEGORY_ENUM,
//         fuelTypes: FUEL_ENUM,
//         transmissions: TRANSMISSION_ENUM
//     });
// });
//second vehicles route
// app.get("/vehicles", async (req, res) => {
//     const { category, transmission, fuelType, city, maxPrice } = req.query;

//     let filter = {};

//     if (category) filter.category = category;
//     if (transmission) filter.transmission = transmission;
//     if (fuelType) filter.fuelType = fuelType;
//     if (city) filter["location.cities"] = city; // <-- change from location.city to location.cities
//     if (maxPrice) filter.pricePerDay = { $lte: Number(maxPrice) };

//     const allVehicles = await Cars.find(filter);

//     res.render("pages/vehicles", {
//         title: "Vehicles - YourRide",
//         allVehicles,
//         filters: req.query, // selected filters for EJS
//         categories: CATEGORY_ENUM,
//         fuelTypes: FUEL_ENUM,
//         transmissions: TRANSMISSION_ENUM
//     });
// });
//third vehicles route (Triggered)
// app.get("/vehicles", async (req, res) => {
//     const { category, transmission, fuelType, city, maxPrice } = req.query;

//     let filter = {};

//     if (category) filter.category = category;
//     if (transmission) filter.transmission = transmission;
//     if (fuelType) filter.fuelType = fuelType;
//     if (city) filter["location.cities"] = city;
//     if (maxPrice) filter.pricePerDay = { $lte: Number(maxPrice) };

//     const allVehicles = await Cars.find(filter);

//     // Available cities calculate
//     const availableCitiesSet = new Set();
//     allVehicles.forEach(car => {
//         car.location.cities.forEach(c => availableCitiesSet.add(c));
//     });
//     const availableCities = Array.from(availableCitiesSet).sort(); // alphabetically

//     res.render("pages/vehicles", {
//         title: "Vehicles - YourRide",
//         allVehicles,
//         filters: req.query,
//         categories: CATEGORY_ENUM,
//         fuelTypes: FUEL_ENUM,
//         transmissions: TRANSMISSION_ENUM,
//         availableCities // <- pass to EJS
//     });
// });




// Form with validation
// app.post(
//     "/submit",
//     body("email").isEmail().withMessage("Invalid Email"),
//     body("password").isLength({ min: 6 }).withMessage("Password too short"),

//     (req, res) => {
//         const errors = validationResult(req)

//         if (!errors.isEmpty()) {
//             return res.json({ errors: errors.array() })
//         }
//         res.send("Form Submitted Successfully")
//     }
// )

// File upload route
app.post("/upload", upload.single("image"), (req, res) => {
    if (!req.file) {
        return res.status(400).send("No File Uploaded")
    }

    console.log(req.file)
    res.json({ message: "File uploaded", filePath: req.file.path })
})

// ================= ROUTES =================
app.use("/",mainRouter)
// app.use("/",vehiclesRouter)
// ================= GLOBAL MIDDLWARE =================
// assumes NODE_ENV is set by the user
if (process.env.NODE_ENV === 'development') {
        // only use in development
        app.use(errorHandler())
  
 }
 

// ================= SERVER =================
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

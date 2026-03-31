import Cars from "../models/carSchema.js";
import bookingCarSubmitFormModel from "../models/bookingSchema.js";
import {
    CATEGORY_ENUM,
    FUEL_ENUM,
    TRANSMISSION_ENUM
} from "../models/carSchema.js";
import bcrypt from "bcrypt"
import userSchema from "../models/userSchema.js"
const homePage = (req, res) => {
    res.render("pages/home.ejs", {
        title: "YourRide – Your Journey, Your Way"
    });
};
const vehiclesPage = async (req, res) => {
    const { category, transmission, fuelType, city, maxPrice } = req.query;

    let filter = {};

    if (category) filter.category = category;
    if (transmission) filter.transmission = transmission;
    if (fuelType) filter.fuelType = fuelType;
    if (city) filter["location.cities"] = city;
    if (maxPrice) filter.pricePerDay = { $lte: Number(maxPrice) };

    const allVehicles = await Cars.find(filter);

    // Available cities calculate
    const availableCitiesSet = new Set();
    allVehicles.forEach(car => {
        car.location.cities.forEach(c => availableCitiesSet.add(c));
    });
    const availableCities = Array.from(availableCitiesSet).sort(); // alphabetically

    res.render("pages/vehicles", {
        title: "Vehicles - YourRide",
        allVehicles,
        filters: req.query,
        categories: CATEGORY_ENUM,
        fuelTypes: FUEL_ENUM,
        transmissions: TRANSMISSION_ENUM,
        availableCities // <- pass to EJS
    });
}
const selfDrivesPage = (req, res) => {
    res.render("pages/selfDrives.ejs", { title: "SelfDrives - YourRide" })
}
const contactPage = (req, res) => {
    res.render("pages/contact.ejs", { title: "Contact - YourRide" })
}
const faqsPage = (req, res) => {
    res.render("pages/faq.ejs", { title: "FAQs - YourRide" })
}
const bookingCarSubmitForm = async (req, res) => {
    const { name, number, id, city, service, requirements } = req.body.bookingForm;
    const submitNow = await bookingCarSubmitFormModel.create({
        name,
        number,
        id,
        city,
        service,
        requirements

    })
    res.json({
        submit: submitNow
    })
}
const signUpPage = (req, res) => {
    try {
        res.render("pages/signUpPage.ejs", { title: "Sign Up - YourRide" })
    } catch (err) {
        res.send(`Error of CATCH ${err}`)
    }

}
const signUpForm = async (req, res) => {
    const { name, email, phone, password, city, area } = req.body
    // res.json({
    //     name:name,
    //     email:email,
    //     phone:phone,
    //     password:password,
    //     city:city,
    //     area:area
    // })
    //encrypt password
    const passwordString = String(password);
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(passwordString, salt);
    const registerUser = await userSchema.inserOne({
        name: name,
        email: email,
        phone: phone,
        password: hashedPassword,
        city: city,
        area: area
    })
    console.log(registerUser)
}
export default {
    homePage, vehiclesPage, selfDrivesPage, contactPage, faqsPage, bookingCarSubmitForm, signUpPage, signUpForm
};

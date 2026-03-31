import express from "express";
import mainController from "../controllers/mainController.js";
import asyncHandler from "express-async-handler";
const mainRouter = express.Router();

// Home Page
mainRouter.get("/", mainController.homePage);

// Vehicles Page
mainRouter.get("/vehicles",asyncHandler(mainController.vehiclesPage));
mainRouter.get("/self-drives",mainController.selfDrivesPage)
mainRouter.get("/contact",mainController.contactPage)
mainRouter.get("/faqs",mainController.faqsPage)
mainRouter.post("/vehicles/car/:id/submit",mainController.bookingCarSubmitForm)
mainRouter.get("/create-account",mainController.signUpPage)
mainRouter.post("/sign-Up",mainController.signUpForm)

export default mainRouter;

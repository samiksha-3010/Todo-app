import { Router } from "express";
import AuthRoutes from './auth.routes.js'
// import ProductRoutes from './ProductRoutes.js'
// import UserRoutes from "./UserRoutes.js"

const router = Router();


router.use('/auth', AuthRoutes);
// router.use('/product', ProductRoutes);
// router.use('/user', UserRoutes)

export default router;


// const express = require("express");
// const mongoose = require("mongoose");
// require("dotenv").config();

// const routes = require("./Routes/ToDoRoutes");

// const cors = require("cors");

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(express.json());
// app.use(cors());

// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log("MongoDB connected..."))
//   .catch((err) => console.log(err));

// app.use("/api", routes);


// app.listen(PORT, () => console.log(`Listening at ${PORT}...`));
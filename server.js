import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/connectDB.js";

//Load environment variables from .env file
dotenv.config();

//Rest object
const app = express();

//Middleware
app.use(express.json());

//Connecting to Database
connectDB();

app.get("/", (req, res) => {
  res.send({ message: "Welcome to money management system" });
});

app.listen(process.env.PORT || 8080, () => {
  console.log(
    `Server is running on port ${process.env.PORT || 8080}`.bgBlue.white
  );
});

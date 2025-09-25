const express = require("express");

const app = express();
const authRoute = require("./routes/auth.js");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();
app.use(express.json());

// app.use("/", authRoute);
app.use("/api", authRoute);

mongoose.connect(process.env.MONGO_URL_KEY).then(() => {
  console.log("mongodb successfully connected");
});

app.listen(5000, () => {
  console.log("Server Startedd Successfully");
});

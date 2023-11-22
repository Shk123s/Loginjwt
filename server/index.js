const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require('./Routes/AuthRoutes');
const cookieParser = require("cookie-parser");
const app = express();

app.listen(4000, console.log("listening port 4000"));
mongoose
  .connect("mongodb://127.0.0.1:27017/jwt", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongodb is connected");
  })
  .catch((error) => {
    console.log(error);
  });
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use("/",authRoutes);

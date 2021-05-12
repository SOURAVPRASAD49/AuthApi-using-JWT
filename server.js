require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.static("public"));
//import routes
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
//middleware
app.use(express.json());
//route middleware
app.use("/api/user", authRoute);
app.use("/api/posts", postRoute);
mongoose.connect(
  process.env.MONGODB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log("DB connected!!");
    app.listen(3000, () => {
      console.log("server up and running at 3000");
    });
  }
);

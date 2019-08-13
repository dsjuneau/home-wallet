const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
// const fileUpload = require("express-fileupload"); //! added for file upload

// const fs = require("fs");
// require("dotenv").config();

// !! Cloudinary for Heroku
// const cloudinary = require("cloudinary");
// const cloud_name = process.env.
// const api_key = process.env.
// const api_secret = process.env.

// https://stackoverflow.com/questions/47196800/reactjs-and-images-in-public-folder

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// // ! added for file upload
// app.use(fileUpload());

// app.post("/upload", (req, res) => {
//   if (req.files === null) {
//     return res.status(400).json({ msg: "no file was uploaded" });
//   }
//   const file = req.files.file;

//   file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
//     if (err) {
//       console.error(err);
//       return res.status(500), send(err);
//     }

//     res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
//   });
// });

// //! end file upload

// Define API routes here
app.use(routes);
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//Connect to mongoDB
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/myHomeWallet", {
    useNewUrlParser: true,
  })
  .then(() => console.log("Database Connected"));

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

const express = require("express");
require("dotenv").config()
const db = require("./config/database");
const cloudinary=require('./config/cloudinary')
const main = require("./routes/Main");
const app = express();
var cors = require("cors");
const PORT = process.env.PORT || 3000;

// CORS Configuration
app.use(
  cors({
    origin: "*",
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
  })
);
// Middleware
app.use(express.json());


// fileupload
const fileupload=require("express-fileupload")
app.use(fileupload({
  useTempFiles : true,
  tempFileDir : '/tmp/'
}))



db.dbConnect()

cloudinary.cloudinaryConnect()

// console.log("/api/v1",main)
app.use("/api/v1", main);

app.listen(PORT, () => {
  console.log(`THE SERVER IS UP AND RUNNING AT PORT ${PORT}`);
});

app.get("/", (req, res) => {
  res.send(`<h1>Home Page</h1>`);
});

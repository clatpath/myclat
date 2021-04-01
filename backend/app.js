const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const path = require("path")
const cors = require("cors");
const connectDB = require("./confiq/db");
dotenv.config({ path: ".env" });




const app = express();
connectDB();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());



//My routes
const userRouter = require("./Routes/userRoutes");



app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

// routes
app.use("/myclat/users", userRouter);

const port = 5000;
app.listen(`${port}` , (req, res) => {
    console.log(`Server is connected successfully at port: ${port}`)
})

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

//to use dotenv
dotenv.config();

//connecting to mongodb
//below line is copied from mongoose on how to connect to mongodb
mongoose.connect(process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }, () =>{
    console.log('connected to mongodb');
  }
);

//middleware
//bodyparser used when making a post request
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));


app.listen(3001, ()=>{
    console.log('server started running on 3001')
})
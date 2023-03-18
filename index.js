"use strict"
const express = require("express");
const app = express();
const cors = require("cors");
console.log("App listen at port 5000");
// To connect with your mongoDB database
const mongoose = require("mongoose");
// Connecting to database
mongoose.connect(
"mongodb+srv://Shiv:shivamjain@cluster0.bdgd3pf.mongodb.net/?retryWrites=true&w=majority",
{
	dbName: "LoginAuthentication",
	useNewUrlParser: true,
	useUnifiedTopology: true,
},
(err) =>
	err ? console.log(err) : console.log(
	"Connected to yourDB-name database")
);
const contactSchema = {
    email: String,
    Password: String,
  };
let loginRoute=require("./routes/login");
app.use("",loginRoute);
app.init();


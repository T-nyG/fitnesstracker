const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.env.PORT || 3000;

const db = require("./models/index.js");
const apiRoutes = require("./routes/apiRoutes.js")
const htmlRoutes = require("./routes/htmlRoutes.js");
const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(apiRoutes);
app.use(htmlRoutes);

var MONGODB_URI = process.env.MONGODB_URL || "mongo ds017544.mlab.com:17544/heroku_wzrhh0c5 -u <dbuser> -p <dbpassword>";
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  family: 4 // Use IPv4, skip trying IPv6
};
mongoose.connect(MONGODB_URI,options)






app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
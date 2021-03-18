const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const colors = require("colors");
const methodOverride = require("method-override");
const connectDB = require("./config/db");

dotenv.config({ path: "./config/config.env" });

connectDB();

const articleRoutes = require("./routes/articles");
const ExpressError = require("./utils/ExpressError");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

app.use(express.urlencoded({extended: false}));
app.use(methodOverride("_method"))

app.use(articleRoutes);

app.all("*", (req, res, next) => {
  next(new ExpressError("Page Not Found", 404));
});

app.use((err, req, res, next) => {
  const { statusCode = 500 } = err;
  if (!err.message) err.message = "Something went wrong";
  res.status(statusCode).render("error", { err });
});

app.listen(PORT, () => {
  console.log(`Server Started at http://localhost:${PORT}`);
});

if(process.env.NODE_ENV !== "production") {
    require("dotenv").config();
  }

const express = require("express");

const ExpressError = require("./utils/ExpressError");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res, next) => {
  res.render("index");
});

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

const express = require("express");
const app = express();
const morgan = require("morgan");
app.use(express.static("public"));
app.use(express.json());
app.use(morgan("dev"));

const tourRouter = require("./routes/tourRoutes");

app.use("/api/v1/tours", tourRouter);

module.exports = app;

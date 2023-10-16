const express = require("express");
const morgan = require("morgan");

const app = express();

const tourRouter = require("./routes/tourRoutes");
const userRouter = require("./routes/userRoutes");

if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

app.use(express.static(`${__dirname}/public`));
app.use(express.json());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);

// for handling not found
app.all("*", (req, res, next) => {
  // res.status(404).json({
  //   status: "fail",
  //   message: `Can't find ${req.originalUrl} on this server!`,
  // });

  const err = new Error(`Can't find ${req.originalUrl} on this server`);

  err.status = "fail";
  err.statusCode = 404;

  // way to skip all middlewares and search for error handling middleware
  // next(param) denotes error
  next(err);
});

app.use((err, req, res, next) => {
  // 500 internal server error

  // values assigned if undefined
  const { statusCode = 500, status = "error", message } = err;

  res.status(statusCode).json({
    status,
    message,
  });
});

module.exports = app;

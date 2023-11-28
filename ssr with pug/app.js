const express = require("express");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");

const tourRouter = require("./routes/tourRoutes");
const userRouter = require("./routes/userRoutes");
const reviewRouter = require("./routes/reviewRoutes");
const globalErrorHandler = require("./controllers/errorController");

const app = express();

// 1) GLOBAL MIDDLEWARES

// Security HTTP headers
app.use(helmet());

if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

// Limit requests from same API
const limiter = rateLimit({
  max: 100, // 100 requests
  windowMs: 60 * 60 * 1000, // 60 min
  message: "Too many requests from this IP, please try again in an hour",
});

app.use("/api", limiter);

// Data sanitization against NOSQL query injection

// Problem
// we know password then we write email as email:{gt:""}
// and we are logged in which is an error
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

// Prevent parameter pollution

// problem &sort=price &sort=duration
// throws error as only one sort field should be there as implemented that way

// Solution use hpp
// to allow some parameters we use whitelist in the option
app.use(
  hpp({
    whitelist: [
      "duration",
      "ratingsQuantity",
      "ratingsAverage",
      "maxGroupSize",
      "difficulty",
      "price",
    ],
  })
);

// BODY PARSER, reading data from body into req.
// limit set to req.body data's
app.use(express.json({ limit: "10kb" }));

// Serving static files
app.use(express.static(`${__dirname}/public`));

// Test Middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/reviews", reviewRouter);

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

app.use(globalErrorHandler);

module.exports = app;

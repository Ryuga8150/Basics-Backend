const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

let data = JSON.parse(
  fs.readFileSync("./public/test.json", { encoding: "utf8" })
);
//console.log(data);

app.use(express.static("public"));
app.use(express.json());
// Basic Routes
app.get("/api/v1/home", (req, res) => {
  res.send("Home Page");
});

app.get("/api/v1/about", (req, res) => {
  res.send("About Page");
});

// Route for handling data
// with proper messaging in JSON format
// and total results
app.get("/api/v1/data", (req, res) => {
  if (!data)
    return res.status(404).json({
      status: "failure",
      message: "not found",
    });

  res.status(200).json({
    status: "success",
    results: data.length,
    data: {
      data,
    },
  });
});

// Finding a given id Data
app.get("/api/v1/data/:id", async (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  console.log(data);

  const newData = Object.keys(data)
    .map((ind) => data[ind])
    .find((obj) => obj["_id"]["$oid"] === id);
  console.log(newData);

  if (!newData)
    return res.status(404).json({
      status: "failure",
      message: `Not found id ${id}`,
    });

  return res.status(200).json({
    status: "success",
    data: {
      newData,
    },
  });
});

// More than One Callback function

app.get(
  "/api/v1/cb1&cb2",
  (req, res, next) => {
    console.log("Callback 1");
    next();
  },
  (req, res) => {
    console.log("Callback 2");
    res.send("Callbacks 1 and 2 printed");
  }
);

// Creating route
app.route("/api/v1/book").get((req, res) => {
  res.send("Get request on book");
});

// POST request
// needs express.json() MIDDLEWARE
// TO access request object propertes
app
  .route("/api/v1/dataPost")
  .post((req, res) => {
    console.log(req.body);
    res.send("Done");
  })
  .delete((req, res) => {
    res.status(204).json({
      status: "success",
      data: null,
    });
  });

// Route Formatting
// 1. keep callbacks as separate functions
// 2. use app.route() to group them under one and can use methods separately and
//    is easy to read

/*
const getTour = (req, res, next) => {
  res.status(200).json({
    message: "Getting Tour",
  });
};
const getAllTours = (req, res, next) => {
  res.status(200).json({
    message: "Getting All Tour",
  });
};

app.route("/api/v1/tours").get(getAllTours);
app.route("/api/v1/tours/:id").get(getTour);

// Modified
const tourRouter = express.Router();
app.use("/api/v1/tours", tourRouter);

tourRouter.route("/").get(getAllTours);
tourRouter.route("/:id").get(getTour);
*/

app.listen(port, () => {
  console.log("Server started");
});

const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const mongoose = require("mongoose");
//import mongoose from "mongoose";

const app = require("./app");

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

/*
useNewUrlParser, useUnifiedTopology, useFindAndModify, and useCreateIndex are no longer supported options.
Mongoose 6 always behaves as if useNewUrlParser, useUnifiedTopology, 
and useCreateIndex are true, and useFindAndModify is false. Please remove these options from your code.
*/
mongoose
  .connect(DB, {
    //useNewUrlParser: true,
    //useCreateIndex: true,
    //useFindAndModify: false,
  })
  .then((con) => {
    //console.log(con);
    console.log("Database Successfully connected");
  });

// const testTour = new Tour({
//   name: "Test Tour 2",
//   number: 24,
//   price: 497,
// });

// testTour
//   .save()
//   .then((doc) => console.log(doc))
//   .catch((err) => console.log(err));

app.listen(process.env.PORT, () => {
  console.log(`Server started listening at ${process.env.PORT}`);
});

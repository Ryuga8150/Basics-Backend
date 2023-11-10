const fs = require("fs");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const mongoose = require("mongoose");

const Tour = require("./../../models/tourModel");

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then((con) => {
  //console.log(con);
  console.log("Database Successfully connected");
});

// READ JSON FILE
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/tours-simple.json`, "utf-8")
);

// IMPORT DATA INTO DB

const importData = async () => {
  try {
    // can accept an array
    await Tour.create(tours);
    console.log("Data successfully deleted!");
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

// delete all data

const deleteData = async () => {
  try {
    await Tour.deleteMany();
    console.log("Data successfully deleted");
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

//console.log(process.argv);

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}

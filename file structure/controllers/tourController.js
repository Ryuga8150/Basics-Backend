const fs = require("fs");
const path = require("path");
//const Path = path.join(__dirname, path.relative("./data/tours-simple.json"));
//console.log(Path);
//const fileData = fs.readFileSync(Path);
//const data = JSON.parse(fileData);
//console.log(typeof data);
//console.log(fileData.map((el) => el.id));

// points to the absolute path of the folder in which the file is kept
//console.log(__dirname);

exports.getTour = (req, res, next) => {
  res.status(200).json({
    message: "Getting Tour",
  });
};
exports.getAllTours = (req, res, next) => {
  res.status(200).json({
    message: "Getting All Tour",
  });
};

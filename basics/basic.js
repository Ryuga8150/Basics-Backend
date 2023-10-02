const express = require("express");

const app = express();
const port = 3000;

//works only for
// localhost/test.txt

// this is relative path
// if provide full path then called as absolute
app.use(express.static("public"));

app.get("/", (req, res) => {
  console.log(__dirname);
  res.send("Home Page");
  console.log("Hii");
});
app.get("/about", (req, res) => {
  res.send("About Page");
});
app.get("/site", (req, res) => {
  res.send("Site Page");
});

app.all("*", (req, res) => {
  console.log("Code 404 not Found");
  res.send("Note Found");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

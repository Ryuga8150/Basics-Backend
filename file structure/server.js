const app = require("./app");

// Considered good practice to separate with express and without express things
console.log(process.env);

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Served Started...");
});

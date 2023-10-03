const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const app = require("./app");

app.listen(process.env.PORT, () => {
  console.log(`Server started listening at ${process.env.PORT}`);
});

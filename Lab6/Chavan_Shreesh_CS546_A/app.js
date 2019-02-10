const express = require("express");
const app = express();
const router = express.Router();
const constructorMethod = require("./routes");
constructorMethod(app);
app.listen(3000, () => {
  console.log("We've now got a server!");
  console.log("Your routes will be running on http://localhost:3000");
});
const path = require("path");
const constructorMethod = app => {

  app.get("/", (req, res) => {
    res.sendFile(path.resolve("static/client.html"));
  });
  app.get("*", (req, res) => {
    res.status(400).sendFile(path.resolve("static/error.html"));
  });
};

module.exports = constructorMethod;
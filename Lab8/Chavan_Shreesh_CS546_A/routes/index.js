const resultRoutes = require("./results");
const path = require("path");
const constructorMethod = app => {
  app.use("/results", resultRoutes);
  app.get("/", (req, res) => {
    res.render('./results/index', {
      title: "The Best Palindrome Checker in the World!"
    })
    // res.sendFile(path.resolve("static/about.html"));
  });
  app.use("*", (req, res) => {
    res.redirect("/results");
  });
};

module.exports = constructorMethod;
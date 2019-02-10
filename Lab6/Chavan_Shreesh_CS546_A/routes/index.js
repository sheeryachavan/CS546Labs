const about = require("./about");
const education = require("./education");
const story = require("./story");
const constructorMethod = app => {
  app.use("/about", about);
  app.use("/education", education);
  app.use("/story", story);
  // app.get("/", async (req, res) => {
  //   try {
  //     const home = "Welcome aboard!!";
  //     res.json(home);
  //   } catch (e) {
  //     res.status(404).json({
  //       message: " 404: File not found!"
  //     });
  //   }
  // });
  app.use("*", async (req, res) => {
    res.status(404).json({
      error: "404: File Not found"
    });
  });
};
module.exports =  constructorMethod;
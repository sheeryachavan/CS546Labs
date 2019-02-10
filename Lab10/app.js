const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
// const movieData = require("./data.js");
const configRoutes = require("./routes");


// We create our express isntance:
const app = express();

app.use(cookieParser());
app.use(bodyParser.json()); // for parsing application/json
const exphbs = require("express-handlebars");
// app.use();
app.use("/public", express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");
app.get("/", function (request, response, next) {
    if (request.cookies.AuthCookie)
        response.redirect("/private");
    else {
        response.render("users/login_page");
    }
});
configRoutes(app);
app.listen(3000, function () {
    console.log(
        "Your server is now listening on port 3000! Navigate to http://localhost:3000 to access it"
    );
    if (process && process.send) process.send({
        done: true
    }); // ADD THIS LINE
});
const userData = require("../data");
const bcrypt = require("bcrypt");
const constructorMethod = app => {
    app.get("/login", (req, res) => {
        res.render("users/login_page");
    });
    app.post("/login", async (req, res) => {
        try {
            const user = await userData.users.getuserByUserName(req.body.username);
            if (await bcrypt.compare(req.body.password, user.hashedPassword)) {
                res.cookie('AuthCookie', req.body.username);
                res.redirect("/private");
            } else res.status(403).render("users/login_page", {
                err: "Password is incorrect",
                iserror: true
            });
        } catch (e) {
            res.status(403).render("users/login_page", {
                err: e,
                iserror: true
            });
        }
    });
    app.get("/private", async (req, res) => {

        if (req.cookies.AuthCookie) {
            // console.log(req.cookies.AuthCookie);
            const user = await userData.users.getuserByUserName(req.cookies.AuthCookie);
            res.render("users/private", user);
        } else {

            res.status(403).render("users/logout", {
                msg: "You are not authenticated"
            });
        }

    });
    app.get("/logout", (req, res) => {
        console.log()
        res.clearCookie('AuthCookie');
        res.render("users/logout", {
            msg: "You are logged out"
        });

    });
};

module.exports = constructorMethod;
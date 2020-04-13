var express = require("express");
var router = express.Router();
var User = require("../models/user")


router.get("/", function (req, res, next) {
    res.sendFile(__dirname + "/login.html");
});

router.get("/loginerror", function (req, res, next) {
    res.sendFile(__dirname + "/loginerror.html");
});


router.post("/", function (req, res, next) {
    let id = req.body.userid;
    let pass = req.body.password;
    console.log(pass);



    User.findOne({ userID: "9999" }, function (err, docs) {
        var loginerror = true;
        if (err) {
            console.log(err);
            loginerror = true;
        }
        else {
            loginerror = false;
            if (pass == docs.password) {
                console.log("Login Success");
                res.redirect("/home");
            } else {
                res.redirect("/loginerror");
            }
        }

    });



});

module.exports = router;
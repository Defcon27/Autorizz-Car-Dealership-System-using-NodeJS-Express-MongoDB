var express = require("express");
var router = express.Router();
var User = require("../models/user")


router.get("/", function (req, res, next) {
    res.sendFile(__dirname + "/login.html");
});


router.post("/", function (req, res, next) {
    let id = req.body.userid;
    let pass = req.body.password;
    console.log(pass);
    var docs = null

    User.findOne({ userID: "9999" }, function (err, docs) {
        if (err) {
            console.log(err);
        }
        else if (docs != null) {
            if (pass == docs.password) {
                console.log("Login Success");
                res.redirect("/home")
            }
        }
        console.log("Wrong input");

    });

});

module.exports = router;
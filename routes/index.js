var express = require("express");
var router = express.Router();
var Model = require("../models/model");

router.get("/shop", function(req, res, next) {
  Model.find(function(err, docs) {
    res.render("shop/index.hbs", { title: "Autorizz", models: docs });
    console.log(docs);
  });
});

router.get("/service", function(req, res, next) {
  Model.find(function(err, docs) {
    res.render("shop/index.hbs", { title: "Autorizz", models: docs });
    console.log(docs);
  });
});

router.get("/login", function(req, res, next) {
  res.sendFile(__dirname + "/login.html");
});

/* GET home page. */
router.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

module.exports = router;

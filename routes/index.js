var express = require("express");
var router = express.Router();
router.use(express.static("public"));
var Model = require("../models/model");

router.get("/shop", function (req, res, next) {
  Model.find(function (err, docs) {
    res.render("shop/index.hbs", { title: "Autorizz", models: docs });
    console.log(docs);
  });
});

router.get("/service", function (req, res, next) {
  Model.find(function (err, docs) {
    res.render("shop/index.hbs", { title: "Autorizz", models: docs });
    console.log(docs);
  });
});


router.get("/booknow/:id", function (req, res, next) {

  var modelid = req.params.id;
  console.log(modelid);

  Model.findById(modelid, function (err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      console.log(doc);

      res.render("shop/booking", { title: "Autorizz", model: doc })
    }

  });
});


/* GET home page. */
router.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});


module.exports = router;

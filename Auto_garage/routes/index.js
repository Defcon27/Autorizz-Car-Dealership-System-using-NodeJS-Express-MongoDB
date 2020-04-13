var express = require("express");
var router = express.Router();
router.use(express.static("public"));
var Model = require("../models/model");
var Servicing = require("../models/servicing");
var nodemailer = require('nodemailer');

router.get("/shop", function (req, res, next) {
  Model.find(function (err, docs) {
    res.render("shop/index.hbs", { title: "Autorizz", models: docs });
    console.log(docs);
  });
});

router.get("/service", function (req, res, next) {
  Servicing.find(function (err, docs) {
    res.render("servicing/servicing.hbs", { title: "Autorizz", servicecars: docs });
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



router.get("/service/email", function (req, res) {

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'defcon.sentinal95@gmail.com',
      pass: 'hemanth2000'
    }
  });

  var mailOptions = {
    from: 'defcon.sentinal95@gmail.com',
    to: 'hemanthkollipara95@gmail.com',
    subject: 'Autorizz Garage',
    text: 'Dear Customer servicing for vehicle has been done. Please drive back your beloved vehicle.'
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }

  });

});




module.exports = router;

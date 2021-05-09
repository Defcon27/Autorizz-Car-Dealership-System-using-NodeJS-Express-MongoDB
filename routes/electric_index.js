var express = require('express');
const mongoose = require('mongoose');
var router = express.Router();
var ElectricModel = require("../models/ElectricModel");

router.use(express.static("public"));


// GET Electric Cars
router.get('/', async function (req, res) {

    let electric_models = await ElectricModel.find();
    res.render("electric_index.hbs", { models: electric_models });
});


// GET Filtering Electric Cars
router.get('/filter', async function (req, res) {


    // Sorting
    let filtered_models;

    const sortBy = req.query.sortBy;
    console.log(sortBy);

    if (sortBy == 'latest') {
        filtered_models = await ElectricModel.find().sort({ year: -1 });
    }
    else if (sortBy == 'highprice') {
        filtered_models = await ElectricModel.find().sort({ price: -1 });
    }
    else if (sortBy == 'lowprice') {
        filtered_models = await ElectricModel.find().sort({ price: 1 });
    }
    else if (sortBy == 'highrange') {
        filtered_models = await ElectricModel.find().sort({ range: -1 });
    }
    else if (sortBy == 'lowrange') {
        filtered_models = await ElectricModel.find().sort({ range: 1 });
    }
    else if (sortBy == 'highperf') {
        filtered_models = await ElectricModel.find().sort({ time60: 1 });
    }
    else if (sortBy == 'lowperf') {
        filtered_models = await ElectricModel.find().sort({ time60: -1 });
    }


    // Price Filtering
    const priceBy = req.query.priceBy;
    console.log(priceBy);
    if (priceBy != undefined) {
        const priceLt = priceBy.slice(5) + '000';
        console.log(priceLt);
        filtered_models = await ElectricModel.find({ price: { $lte: priceLt } }).sort({ price: -1 });
    }


    // Year Filtering
    var year = req.query.year;
    if (year != undefined) {
        year = year.slice(4);
        console.log(year);
        filtered_models = await ElectricModel.find({ year: year });
    }

    var yearLt = req.query.yearLt;
    if (yearLt != undefined) {
        yearLt = yearLt.slice(4);
        console.log(yearLt);
        filtered_models = await ElectricModel.find({ year: { $lte: yearLt } });
    }

    var rangeLt = req.query.rangeLt;
    if (rangeLt != undefined) {
        console.log(rangeLt);
        filtered_models = await ElectricModel.find({ range: { $lte: rangeLt } }).sort({ range: -1 });
    }


    //console.log(filtered_models);
    res.render("electric_index.hbs", { models: filtered_models });

});





// GET Booked Model
router.get('/booknow/:id', async function (req, res) {

    let modelid = req.params.id;
    console.log(modelid);

    let booked_model = await ElectricModel.findById(modelid);
    //console.log(booked_model);
    res.render("booking.hbs", { model: booked_model });

});

router.get('/filter/booknow/:id', async (req, res) => {
    let modelid = req.params.id;
    res.redirect('/electric/booknow/' + modelid);
});



module.exports = router;

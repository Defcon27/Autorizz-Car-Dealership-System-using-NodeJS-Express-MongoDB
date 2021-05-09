const mongoose = require("mongoose");

const electricModelSchema = new mongoose.Schema({
    imagePath: { type: String, required: true },
    title: { type: String, required: true },
    t1: { type: String, required: true },
    t2: { type: String, required: true },
    year: { type: Number, required: true },
    price: { type: Number, required: true },
    priceStr: { type: String, required: true },
    topspeed: { type: String, required: true },
    time60: { type: String, required: true },
    range: { type: String, required: true },
    colour: { type: String, required: true },
    interior: { type: String, required: true },
    wheel: { type: String, required: true },
    description: { type: String, required: true },
    safety: { type: String, required: true },
    rangedesc: { type: String, required: true }
});

module.exports = mongoose.model("electricmodel", electricModelSchema, "electricmodel");

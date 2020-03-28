var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var schema = new Schema({
  imagePath: { type: String, required: true },
  title: { type: String, required: true },
  t1: { type: String, required: true },
  t2: { type: String, required: true },
  price: { type: String, required: true },
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

module.exports = mongoose.model("model", schema, "model");

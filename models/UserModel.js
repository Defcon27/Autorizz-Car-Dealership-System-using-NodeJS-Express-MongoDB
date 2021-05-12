var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
  userID: { type: String, required: true },
  password: { type: String, required: true }
});

module.exports = mongoose.model("user", userSchema, "user");
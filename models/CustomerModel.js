const mongoose = require("mongoose");

const customerModelSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true }
});

module.exports = mongoose.model("customer", customerModelSchema, "customer");
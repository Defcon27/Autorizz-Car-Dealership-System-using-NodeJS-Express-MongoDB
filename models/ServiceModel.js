var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var serviceModelSchema = new Schema({
    customerImage: { type: String, required: true },
    customerName: { type: String, required: true },
    customerEmail: { type: String, required: true },
    customerPhone: { type: String, required: true },
    customerModel: { type: String, required: true },
    customerType: { type: String, required: true },
    customerDone: { type: String, required: true },
    customerBill: { type: String, required: true },
    Date: { type: String, required: true }
});

module.exports = mongoose.model("service", serviceModelSchema, "service");
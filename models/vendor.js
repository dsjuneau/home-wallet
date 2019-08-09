const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const vendorSchema = new Schema({
  userId: { type: String, required: true },
  vendorName: { type: String },
  vendorCompany: { type: String },
  vendorPhone: { type: String },
  vendorEmail: { type: String },
  vendorCategory: { type: String },
  vendorNotes: { type: String },
  date: { type: Date, default: Date.now },
});

const Vendor = mongoose.model("Vendor", vendorSchema);

module.exports = Vendor;

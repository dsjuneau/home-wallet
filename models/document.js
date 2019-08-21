const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const docSchema = new Schema({
  userId: { type: String },
  fileName: { type: String },
  fileUrl: { type: String },
  date: { type: Date, default: Date.now },
});

const Document = mongoose.model("Document", docSchema);

module.exports = Document;

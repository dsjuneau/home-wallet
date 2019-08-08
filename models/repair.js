const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const repairSchema = new Schema({
//  userId: { type: Schema.Types.ObjectId, ref: 'User' },  // replace with house id?
//  bidId: { type: Schema.Types.ObjectId, ref: 'Bid' },
  title: { type: String },
  cost: { type: Number },
//  category: { type: String },
  priority: { type: String },
  status: { type: String },
  recurrencePeriod: { type: String },
  startDate: { type: Date },   // Parse into start and end.
  recurrenceStartDate: { type: Date },
  recurrenceEndDate: { type: Date },
  repeatInterval: { type: Number },
  repeatDayOfWeek: { type: String },  // change back tp number?
//  startTime: { type: Date, default: Date.now },
//  endTime: { type: Date, default: Date.now },
  vendor: { type: String },
  notes: { type: String },                                 // MAKE THIS A LIST (DROPDOWN)
  date: { type: Date, default: Date.now },
//  scope: { type: Schema.Types.ObjectId, ref: 'Bid'  },    // PDF?
});

const Repair = mongoose.model("Repair", repairSchema);

module.exports = Repair;

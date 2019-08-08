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
  isRecurring: { type: Boolean, default: false },
  recurrencePeriod: { type: Number },
  startDate: { type: Date, default: Date.now },   // Parse into start and end.
  endDate: { type: Date, default: Date.now },
//  startTime: { type: Date, default: Date.now },
//  endTime: { type: Date, default: Date.now },
  vendor: { type: String },
  notes: { type: String },                                 // MAKE THIS A LIST (DROPDOWN)
  date: { type: Date, default: Date.now },
//  scope: { type: Schema.Types.ObjectId, ref: 'Bid'  },    // PDF?
});

const Repair = mongoose.model("Repair", repairSchema);

module.exports = Repair;

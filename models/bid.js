const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bidSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User' },  // replace with house id?
  repairId: { type: Schema.Types.ObjectId, ref: 'Repair' },
  vendor: { type: String, required: true },      // MAKE THIS A LIST (DROPDOWN)
  title: { type: String, required: true },
  category: { type: String }, // Look up "saving refs" in the Mongoose docs.
  startDate: { type: Date, default: Date.now },   
  endDate: { type: Date, default: Date.now },   
  isChosen: { type: Boolean },
  date: { type: Date, default: Date.now },
//  scope: { type:  },                                        // PDF?
});

const Bid = mongoose.model("Bid", bidSchema);

module.exports = Bid;

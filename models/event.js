const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
//  id: { type: Schema.Types.ObjectId, ref: 'Repair' },  // replace with house id?
//  group_id: { type: Schema.Types.ObjectId }
  title: { type: String },
//  category: { type: String },
  start: { type: Date },   // Look up "saving refs" in the Mongoose docs.
  end: { type: Date },
  editable: { type: Boolean, default: true }
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
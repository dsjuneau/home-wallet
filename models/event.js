const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  userId: { type: String },
//  group_id: { type: Schema.Types.ObjectId }
  title: { type: String },
//  category: { type: String },
  start: { type: Date },
  end: { type: Date },
  rrule: {
    freq: { type: String },
    interval: { type: Number },
    byweekday: { type: String },
    dtstart: { type: Date },
    until: { type: Date },
  },
  duration: { type: Number },
  backgroundColor: { type: String },
  editable: { type: Boolean, default: true }
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;





const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const homeSchema = new Schema({
//  userId: { type: Schema.Types.ObjectId, ref: 'User' },  
  streetAddress: { type: String },
  zipCode: { type: String },
  yearBuilt: { type: Number },
  hasFence: { type: Boolean, default: false },
  hasPool: { type: Boolean, default: false },
  parking: { type: String },
  hasZillow: { type: Boolean, default: false },
  bedrooms: { type: Number },
  bathrooms: { type: Number },
  gla: { type: Number },
  lotSize: { type: Number },
  taxAssessment: { type: Number },
  taxYear: { type: Number },
  zestimate: { type: Number },
  zestimateHigh: { type: Number },
  zestimateLow: { type: Number },
  zillowLink: { type: String },
  date: { type: Date, default: Date.now },
});

const Home = mongoose.model("Home", homeSchema);

module.exports = Home;

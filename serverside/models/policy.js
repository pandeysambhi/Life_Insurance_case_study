const mongoose = require("mongoose");

const PolicySchema = new mongoose.Schema({
  Policy_id: {
    type: String,
    required: true,
    unique: true,
  },
  Date_of_Purchase: {
    type: Date,
    default: Date.now,
  },
  Fuel: {
    type: String,
    required: true,
  },
  VEHICLE_SEGMENT: {
    type: String,
  },
  Premium: {
    type: String,
    required: true,
  },
  bodily_injury_liability: {
    type: String,
    required: true,
  },
  personal_injury_protection: {
    type: String,
    required: true,
  },
  property_damage_liability: {
    type: String,
    required: true,
  },
  collision: {
    type: String,
    required: true,
  },
  comprehensive: {
    type: String,
    required: true,
  },
});

module.exports = Policies = mongoose.model("Policies", PolicySchema);

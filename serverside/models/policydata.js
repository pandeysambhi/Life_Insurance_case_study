const mongoose = require("mongoose");

const policydataSchema = new mongoose.Schema({
  Policy_id: {
    type: String,
    required: true,
    unique: true,
  },
  Date_of_Purchase: {
    type: String,
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
  Customer_id: {
    type: String,
    required: true,
  },
  Customer_Gender: {
    type: String,
    required: true,
  },
  Customer_Income_group: {
    type: String,
    required: true,
  },
  Customer_Region: {
    type: String,
    required: true,
  },
  Customer_Marital_status: {
    type: String,
    required: true,
  },
});

module.exports = PolicyData = mongoose.model("policydata", policydataSchema);

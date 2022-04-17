const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  Customer_id: {
    type: String,
    required: true,
    unique: true,
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

module.exports = Customers = mongoose.model("Customers", customerSchema);

const express = require("express");
const router = express.Router();
const PolicyData = require("../models/policydata");

router.get("/", async (req, res) => {
  const customers = await PolicyData.find();
  if (customers) res.send(customers);
  else {
    res.json({ message: "No Customer Found" });
  }
});

router.put("/update/:policyId", (req, res) => {
  const {
    Policy_id,
    Date_of_Purchase,
    Fuel,
    VEHICLE_SEGMENT,
    Premium,
    bodily_injury_liability,
    personal_injury_protection,
    property_damage_liability,
    collision,
    comprehensive,
    Customer_id,
    Customer_Gender,
    Customer_Income_group,
    Customer_Region,
    Customer_Marital_status,
  } = req.body;
  PolicyData.findOneAndUpdate(
    { Policy_id: Policy_id },
    {
      $set: {
        Date_of_Purchase: Date_of_Purchase,
        Fuel: Fuel,
        VEHICLE_SEGMENT: VEHICLE_SEGMENT,
        Premium: Premium,
        bodily_injury_liability: bodily_injury_liability,
        personal_injury_protection: personal_injury_protection,
        property_damage_liability: property_damage_liability,
        collision: collision,
        comprehensive: comprehensive,
        Customer_id: Customer_id,
        Customer_Gender: Customer_Gender,
        Customer_Income_group: Customer_Income_group,
        Customer_Region: Customer_Region,
        Customer_Marital_status: Customer_Marital_status,
      },
    },
    { new: true },
    (err, doc) => {
      if (err) {
        console.log("Something wrong when updating data!");
      }
      res.send({
        message: `Data Updated Successfully for Policy Id: ${Policy_id} and Customer ID : ${Customer_id}`,
        updatedDoc: doc,
      });
    }
  );
});

module.exports = router;

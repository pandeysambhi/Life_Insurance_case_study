const express = require("express");
const connectDB = require("./config/db");
const app = express();
var cors = require("cors");

app.use(cors());
app.use(express.json({ extended: false }));
connectDB();
app.use("/policydata", require("./Controller/policydataApi"));

app.listen(5000);
console.log("Server started on port 5000");

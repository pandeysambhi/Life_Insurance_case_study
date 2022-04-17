const mongoose = require("mongoose");
const config = require("./config.json");
const db = config.mongoURI;

const connectDB = async () => {
  try {
    await mongoose.connect(db, {});
    console.log("MongoDB connected......");
  } catch (err) {
    console.log(err.message);

    process.exit(1);
  }
};

module.exports = connectDB;

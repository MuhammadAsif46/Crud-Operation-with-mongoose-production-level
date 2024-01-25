const mongoose = require("../dbConnections/connection");
const { Schema, model } = require("mongoose");

let userSchema = Schema({
  userName: { type: String, required: true },
  password: Number,
  createdOn: { type: Date, default: Date.now },
});

const userModel = model("users", userSchema); //model === db-Collection

module.exports = {userModel};
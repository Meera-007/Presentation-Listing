const { Schema, model } = require("../connection");

const schema = new Schema({
  name: String,
  email: String,
  password: String,
  gender: String,
});

module.exports = model("users", schema);
const { Schema, model } = require("../connection");

const schema = new Schema({
  title: String,
  description: String,
  numOfSlide: Number,
  category: String,
  file: String,
  thumbnail: String,
  createdAt: Date,
});

module.exports = model("slides", schema);
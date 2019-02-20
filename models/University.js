const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UniversitySchema = new Schema({
  name: String,
  ownership: String,
  location: String,
  acronym: String,
  address: String,
  schoolWebsite: String
});

module.exports = mongoose.model("University", UniversitySchema);

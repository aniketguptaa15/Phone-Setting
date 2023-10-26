const mongoose = require("mongoose");

const certificationSchema = new mongoose.Schema({
  certificationInfo: String,
});

const Certification = mongoose.model("Certification", certificationSchema);

module.exports = Certification;

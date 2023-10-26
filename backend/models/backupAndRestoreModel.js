const mongoose = require("mongoose");

const backupAndRestoreSchema = new mongoose.Schema({
  mobileDevice: String,
  computer: String,
  xiaomiCloud: String,
  backupMyData: Boolean,
  backupAccount: String,
  automaticRestore: Boolean,
  helpAndFeedback: String,
  googleAccount: String,
});

const backupAndRestore = mongoose.model("backupAndRestore", backupAndRestoreSchema);

module.exports = backupAndRestore;

const mongoose = require("mongoose");

const aboutPhoneSchema = new mongoose.Schema({
  deviceName: {
    type: String,
    required:true,
  },

  miuiVersion: {
    type: String,
    required:true
  },

  storage:{type:String,
           required:true},
  androidVersion:{
    type: String,
     required:true
  },
  securityUpdate:{type:String,
                   required:true} ,
  detailedInfo:  {type:String
                  },
  backupAndRestore: { type: mongoose.Schema.Types.ObjectId, ref: "BackupAndRestore" },
  certification: { type: mongoose.Schema.Types.ObjectId, ref: "Certification" },
});

const AboutPhone = mongoose.model("AboutPhone", aboutPhoneSchema);

module.exports = AboutPhone;

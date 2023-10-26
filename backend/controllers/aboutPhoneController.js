const AboutPhone = require('../models/aboutPhoneModel');

// Create
exports.createAboutPhone = async (req, res) => {
  try {
    const newAboutPhone = new AboutPhone({
      deviceName: "MIUI",
      securityUpdate: "2023-01-01", // Set security update date
      androidVersion: "Android 12", // Set Android version
      storage: "64GB", // Set storage information
      miuiVersion: "MIUI 12", // Set MIUI version
      // Add other properties as required
    });
    
    const aboutPhone = await newAboutPhone.save();
    res.status(201).json(aboutPhone);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
// Read
exports.getAboutPhone = async (req, res) => {
  try {
    const aboutPhone = await AboutPhone.findById({deviceName:"MIUI"});
    if (!aboutPhone) {
      return res.status(404).json({ error: 'About Phone data not found' });
    }
    res.status(200).json(aboutPhone);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update
exports.updateAboutPhone = async (req, res) => {
  try {
    const aboutPhone = await AboutPhone.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!aboutPhone) {
      return res.status(404).json({ error: 'About Phone data not found' });
    }
    res.status(200).json(aboutPhone);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete
exports.deleteAboutPhone = async (req, res) => {
  try {
    const aboutPhone = await AboutPhone.findByIdAndDelete(req.params.id);
    if (!aboutPhone) {
      return res.status(404).json({ error: 'About Phone data not found' });
    }
    res.status(200).json({ message: 'About Phone data deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

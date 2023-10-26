 
const BackupAndRestore = require('../models/backupAndRestoreModel');

 
exports.getBackupRestoreSettings = async (req, res) => {
    try {
        const settings = await BackupAndRestore.findOne() 
        if (settings) {
            res.status(200).json(settings);
        } else {
            res.status(404).json({ message: "Settings not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

exports.updateBackupRestoreSettings = async (req, res) => {
    const newSettings = req.body; 
    try {
        const settings = await BackupAndRestore.findOne(); 
        if (settings) {
            settings.set(newSettings);
            const updatedSettings = await settings.save();
            res.status(200).json(updatedSettings);
        } else {
            res.status(404).json({ message: "Settings not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

exports.backupData =  async (req, res) => {
    const backup = req.body; 
    try {
        const settings = await BackupAndRestore.findOne(); 
        if (settings) {
            settings.set(backup);
            const updatedSettings = await settings.save();
            res.status(200).json(updatedSettings);
        } else {
            res.status(404).json({ message: "Settings not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

exports.restoreData = (req, res) => {
    // Logic to initiate data restoration
    // You can implement this logic based on your requirements
};

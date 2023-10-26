 // backupRestoreRoutes.js
const express = require('express');
const router = express.Router();
const backupRestoreController = require('../controllers/backupAndRestoreController');

// "Backup & Restore" settings ke liye routes

// Endpoint: /backup-restore/settings
router.get('/settings', backupRestoreController.getBackupRestoreSettings);

// Endpoint: /backup-restore/settings/backup
router.get('/settings/backup', backupRestoreController.backupData);

// Endpoint: /backup-restore/settings/restore
router.get('/settings/restore', backupRestoreController.restoreData);

module.exports = router;

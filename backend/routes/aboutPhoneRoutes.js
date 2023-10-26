const express = require('express');
const router = express.Router();
const aboutPhoneController = require('../controllers/aboutPhoneController');

// Create
router.post('/about-phone', aboutPhoneController.createAboutPhone);

// Read
router.get('/about-phone/:id', aboutPhoneController.getAboutPhone);

// Update
router.put('/about-phone/:id', aboutPhoneController.updateAboutPhone);

// Delete
router.delete('/about-phone/:id', aboutPhoneController.deleteAboutPhone);

module.exports = router;

const express = require('express');
const router = express.Router();
const { login, getInquiries, addLocation, deleteLocation } = require('../controllers/adminController');
const { verifyAdmin } = require('../middleware/auth');

router.post('/login', login);
router.get('/inquiries', verifyAdmin, getInquiries);
router.post('/locations', verifyAdmin, addLocation);
router.delete('/locations/:id', verifyAdmin, deleteLocation);

module.exports = router;

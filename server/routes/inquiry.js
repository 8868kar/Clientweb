const express = require('express');
const router = express.Router();
const { createInquiry, getInquiries } = require('../controllers/inquiryController');
const validate = require('../middleware/validate');
const { inquirySchema } = require('../validations/inquiryValidation');

router.post('/', validate(inquirySchema), createInquiry);
router.get('/', getInquiries);

module.exports = router;

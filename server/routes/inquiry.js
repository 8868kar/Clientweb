const express = require('express')
const router = express.Router()
const Inquiry = require('../models/Inquiry')

// POST /api/inquiry — Create new enquiry
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, enquiryType, destination, checkIn, checkOut, guests, message } = req.body

    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required.' })
    }

    const inquiry = await Inquiry.create({
      name, email, phone, enquiryType,
      destination, checkIn, checkOut, guests, message,
    })

    res.status(201).json({
      success: true,
      message: 'Enquiry received. Our curators will contact you within 24 hours.',
      id: inquiry._id,
    })
  } catch (err) {
    console.error('Inquiry error:', err)
    res.status(500).json({ error: 'Server error. Please try again.' })
  }
})

// GET /api/inquiry — List all (basic admin view)
router.get('/', async (req, res) => {
  try {
    const inquiries = await Inquiry.find().sort({ createdAt: -1 })
    res.json(inquiries)
  } catch (err) {
    res.status(500).json({ error: 'Server error.' })
  }
})

module.exports = router

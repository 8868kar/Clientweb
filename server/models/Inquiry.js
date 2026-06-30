const mongoose = require('mongoose')

const inquirySchema = new mongoose.Schema({
  name:        { type: String, required: true, trim: true },
  email:       { type: String, required: true, trim: true, lowercase: true },
  phone:       { type: String, trim: true },
  enquiryType: { type: String, enum: ['booking', 'invest', 'list', 'general'], default: 'booking' },
  destination: { type: String },
  checkIn:     { type: String },
  checkOut:    { type: String },
  guests:      { type: String },
  message:     { type: String },
  status:      { type: String, enum: ['new', 'contacted', 'closed'], default: 'new' },
}, { timestamps: true })

module.exports = mongoose.model('Inquiry', inquirySchema)

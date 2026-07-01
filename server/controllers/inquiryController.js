const Inquiry = require('../models/Inquiry');
const nodemailer = require('nodemailer');

// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: process.env.SMTP_PORT || 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const AppError = require('../utils/AppError');

const createInquiry = async (req, res, next) => {
  try {
    const { name, email, phone, enquiryType, destination, checkIn, checkOut, guests, message } = req.body;

    if (!name || !email) {
      return next(new AppError('Name and email are required.', 400));
    }

    const inquiry = await Inquiry.create({
      name, email, phone, enquiryType,
      destination, checkIn, checkOut, guests, message,
    });

    // Send Email
    try {
      await transporter.sendMail({
        from: `"MHOMES" <${process.env.SMTP_USER}>`,
        to: 'kartikkarnwal07@gmail.com',
        subject: `New Enquiry from ${name}`,
        html: `
          <h2>New Enquiry Details</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
          <p><strong>Type:</strong> ${enquiryType}</p>
          <p><strong>Destination:</strong> ${destination || 'N/A'}</p>
          <p><strong>Dates:</strong> ${checkIn || 'N/A'} to ${checkOut || 'N/A'}</p>
          <p><strong>Guests:</strong> ${guests || 'N/A'}</p>
          <p><strong>Message:</strong> ${message || 'N/A'}</p>
        `,
      });
    } catch (emailError) {
      console.error('Email failed to send:', emailError);
    }

    res.status(201).json({
      success: true,
      message: 'Enquiry received. Our curators will contact you within 24 hours.',
      id: inquiry._id,
    });
  } catch (err) {
    next(err);
  }
};

const getInquiries = async (req, res, next) => {
  try {
    const inquiries = await Inquiry.find().sort({ createdAt: -1 });
    res.json(inquiries);
  } catch (err) {
    next(err);
  }
};

module.exports = { createInquiry, getInquiries };

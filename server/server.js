const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/mhomes'

// ── Middleware ──
const allowedOrigins = process.env.NODE_ENV === 'production' 
  ? ['https://mhomes.in', 'https://www.mhomes.in'] // Replace with actual production domains
  : ['http://localhost:5173'];

app.use(cors({ 
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }, 
  credentials: true 
}))
app.use(express.json())

// ── Routes ──
app.use('/api/inquiry', require('./routes/inquiry'))
app.use('/api/admin', require('./routes/admin'))
app.use('/api/locations', require('./routes/location'))

app.get('/', (req, res) => {
  res.json({ message: 'MHOMES API — Private Sanctuary' })
})

// ── Global Error Handler ──
const errorHandler = require('./middleware/errorHandler');
app.use(errorHandler);

// ── DB + Start ──
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('✓ MongoDB connected')
    app.listen(PORT, () => console.log(`✓ Server running on http://localhost:${PORT}`))
  })
  .catch(err => {
    console.error('MongoDB connection failed:', err.message)
    // Start server anyway (for demo without DB)
    app.listen(PORT, () => console.log(`⚠ Server running (no DB) on http://localhost:${PORT}`))
  })

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/mhomes'

// ── Middleware ──
app.use(cors({ origin: 'http://localhost:5173', credentials: true }))
app.use(express.json())

// ── Routes ──
app.use('/api/inquiry', require('./routes/inquiry'))

app.get('/', (req, res) => {
  res.json({ message: 'MHOMES API — Private Sanctuary' })
})

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

const mongoose = require('mongoose')

const propertySchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  badge: { type: String },
  tagline: { type: String }
})

const locationSchema = new mongoose.Schema({
  name: { type: String, required: true }, // e.g., 'Rajasthan', 'Asia'
  type: { type: String, enum: ['State', 'UT', 'Continent'], required: true },
  region: { type: String }, // e.g., 'North', 'South', 'International'
  subtitle: { type: String },
  properties: [propertySchema]
}, { timestamps: true })

module.exports = mongoose.model('Location', locationSchema)

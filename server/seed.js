const mongoose = require('mongoose');
const Location = require('./models/Location');
require('dotenv').config();

const states = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana',
  'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
  'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana',
  'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
];

const uts = [
  'Andaman and Nicobar Islands', 'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu', 'Lakshadweep',
  'Delhi', 'Puducherry', 'Ladakh', 'Jammu and Kashmir'
];

const continents = [
  'Asia', 'Africa', 'North America', 'South America', 'Antarctica', 'Europe', 'Australia'
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/mhomes');
    await Location.deleteMany({}); // Clear existing
    
    const docs = [];
    states.forEach(s => docs.push({ name: s, type: 'State', region: 'North' }));
    uts.forEach(s => docs.push({ name: s, type: 'UT', region: 'North' }));
    continents.forEach(s => docs.push({ name: s, type: 'Continent', region: 'International' }));
    
    await Location.insertMany(docs);
    console.log('Seeded locations successfully!');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}
seed();

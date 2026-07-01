const Location = require('../models/Location');

const getLocations = async (req, res, next) => {
  try {
    const locations = await Location.find();
    res.json(locations);
  } catch (err) {
    next(err);
  }
};

module.exports = { getLocations };

const School = require('../models/School');

exports.addSchool = async (req, res) => {
  try {
    const { name, address, latitude, longitude } = req.body;
    if (!name || !address || !latitude || !longitude) {
      return res.status(400).json({ error: 'All fields are required vroo' });
    }
    const id = await School.add(name, address, latitude, longitude);
    res.status(201).json({ id, message: 'School added successfully bossman' });
  } catch (error) {
    res.status(500).json({ error: 'Error adding school' });
    console.log(error);
  }
};

exports.listSchools = async (req, res) => {
  try {
    const { latitude, longitude } = req.query;
    if (!latitude || !longitude) {
      return res.status(400).json({ error: 'Latitude and longitude are required' });
    }
    const schools = await School.list(latitude, longitude);
    res.json(schools);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching schools' });
    console.log(error);
  }
};
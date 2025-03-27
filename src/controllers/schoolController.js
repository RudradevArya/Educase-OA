const School = require('../models/School');

exports.addSchool = async (req, res) => {
  try {
    const { name, address, latitude, longitude } = req.body;
    if (!name || !address || !latitude || !longitude) {
      console.log('Bad Request: Missing required fields');
      return res.status(400).json({ error: 'All fields are required vroo' });
    }
    const id = await School.add(name, address, latitude, longitude);
    console.log(`School added successfully with id: ${id}`);
    res.status(201).json({ id, message: 'School added successfully bossman' });
  } catch (error) {
    console.error('Error in addSchool:', error);
    next(error);
    // res.status(500).json({ error: 'Error adding school' });
  }
};

exports.listSchools = async (req, res) => {
  try {
    const { latitude, longitude } = req.query;
    if (!latitude || !longitude) {
      console.log('Bad Request: Missing latitude or longitude');
      return res.status(400).json({ error: 'Latitude and longitude are required' });
    }
    const schools = await School.list(latitude, longitude);
    console.log(`Retrieved ${schools.length} schools`);
    res.json(schools);
  } catch (error) {
    console.error('Error in listSchools:', error);
    next(error);
    // res.status(500).json({ error: 'Error fetching schools' });
  }
};
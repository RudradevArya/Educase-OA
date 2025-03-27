const db = require('../config/database');

class School {
  static async add(name, address, latitude, longitude) {
    const [result] = await db.execute(
      'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)',
      [name, address, latitude, longitude]
    );
    return result.insertId;
  }

  static async list(userLat, userLon) {
    const [rows] = await db.execute('SELECT * FROM schools');
    
    //calci dist and sort em
    const schoolsWithDistance = rows.map(school => ({
      ...school,
      distance: this.calculateDistance(userLat, userLon, school.latitude, school.longitude)
    }));

    return schoolsWithDistance.sort((a, b) => a.distance - b.distance);
  }

  static calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the Earth in km
    const dLat = this.deg2rad(lat2 - lat1);
    const dLon = this.deg2rad(lon2 - lon1);
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const distance = R * c; // Distance in km
    return distance;
  }

  static deg2rad(deg) {
    return deg * (Math.PI/180);
  }
}

module.exports = School;
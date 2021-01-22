//insert data into database
const generateFakeData = require('./data.js');
const mongoose = require('mongoose');
const Comparison = require('./database.js');

Comparison.count({}, function(err, count) {
  if (count < 100) {
    let fakeData = generateFakeData();
    Comparison.insertMany(fakeData)
      .then(() => console.log(`SUCCESSFULLY SEEDED ${fakeData.length} records`))
      .catch((err) => console.log('ERROR SEEDING DATA', err));
  }
});
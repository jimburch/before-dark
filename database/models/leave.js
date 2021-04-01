const mongoose = require('mongoose');

const leaveSchema = mongoose.Schema({
  zip: String,
  sunset: String,
  distance: String,
  pace: String,
  runTime: String,
  leaveTime: String
});

const Leave = mongoose.model('Leave', leaveSchema);

const addLeave = (data, callback) => {
  const leave = new Leave({
    zip: data.zip,
    sunset: data.sunset,
    distance: data.distance,
    pace: data.pace,
    runTime: data.runTime,
    leaveTime: data.leaveTime
  });
  leave.save(leave, (err, results) => {
    err ? callback(err) : callback(null, `${leave} saved!`);
  })
}

module.exports = addLeave;
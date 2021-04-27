import mongoose from 'mongoose';

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

const storeLeaveStats = (req, res) => {
  addLeave(req.body, (err, results) => {
    err ? res.sendStatus(500) : res.status(200).send(results);
  })
};

export default storeLeaveStats;
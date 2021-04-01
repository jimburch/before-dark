const addLeave = require('../models/leave.js');

const storeLeaveStats = (req, res) => {
  addLeave(req.body, (err, results) => {
    err ? res.sendStatus(500) : res.send(results);
  })
};

module.exports = storeLeaveStats;
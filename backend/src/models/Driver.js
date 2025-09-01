const mongoose = require('mongoose');
const DriverSchema = new mongoose.Schema({
  name: { type: String, required:true },
  dob: Date,
  bloodGroup: String,
  contact: String,
  assignedVehicle: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle' }
}, { timestamps:true });
module.exports = mongoose.model('Driver', DriverSchema);

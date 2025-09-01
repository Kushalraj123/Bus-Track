const mongoose = require('mongoose');
const VehicleSchema = new mongoose.Schema({
  busNumber: { type: String, required:true, unique:true },
  license: String,
  mileage: Number,
  seats: Number,
  brand: String,
  model: String,
  status: { type: String, enum:['Working','Halt','Service'], default:'Working' },
  lastServiceKM: { type: Number, default: 0 },
  totalKM: { type: Number, default: 0 }
}, { timestamps:true });
module.exports = mongoose.model('Vehicle', VehicleSchema);

const Vehicle = require("../models/Vehicle");

// @desc   Create a vehicle
// @route  POST /api/vehicles
// @access Manager only
exports.createVehicle = async (req, res) => {
  try {
    const vehicle = await Vehicle.create(req.body);
    res.status(201).json(vehicle);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// @desc   Get all vehicles
// @route  GET /api/vehicles
// @access Manager + Management
exports.getVehicles = async (req, res) => {
  try {
    const { q, status } = req.query;
    const filter = {};
    if (q) filter.busNumber = { $regex: q, $options: "i" };
    if (status) filter.status = status;

    const vehicles = await Vehicle.find(filter).sort({ createdAt: -1 });
    res.json(vehicles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc   Get single vehicle
// @route  GET /api/vehicles/:id
exports.getVehicle = async (req, res) => {
  try {
    const v = await Vehicle.findById(req.params.id);
    if (!v) return res.status(404).json({ message: "Vehicle not found" });
    res.json(v);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc   Update vehicle
// @route  PUT /api/vehicles/:id
// @access Manager only
exports.updateVehicle = async (req, res) => {
  try {
    const v = await Vehicle.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!v) return res.status(404).json({ message: "Vehicle not found" });
    res.json(v);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// @desc   Delete vehicle
// @route  DELETE /api/vehicles/:id
// @access Manager only
exports.deleteVehicle = async (req, res) => {
  try {
    const v = await Vehicle.findByIdAndDelete(req.params.id);
    if (!v) return res.status(404).json({ message: "Vehicle not found" });
    res.json({ message: "Vehicle deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

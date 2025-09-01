const Driver = require("../models/Driver");
const Vehicle = require("../models/Vehicle");

// @desc   Create driver
// @route  POST /api/drivers
// @access Manager only
exports.createDriver = async (req, res) => {
  try {
    const driver = await Driver.create(req.body);
    res.status(201).json(driver);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// @desc   Get all drivers
// @route  GET /api/drivers
exports.getDrivers = async (req, res) => {
  try {
    const drivers = await Driver.find().populate("assignedVehicle", "busNumber status");
    res.json(drivers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc   Get single driver
// @route  GET /api/drivers/:id
exports.getDriver = async (req, res) => {
  try {
    const driver = await Driver.findById(req.params.id).populate("assignedVehicle");
    if (!driver) return res.status(404).json({ message: "Driver not found" });
    res.json(driver);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc   Update driver
// @route  PUT /api/drivers/:id
exports.updateDriver = async (req, res) => {
  try {
    const driver = await Driver.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!driver) return res.status(404).json({ message: "Driver not found" });
    res.json(driver);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// @desc   Delete driver
// @route  DELETE /api/drivers/:id
exports.deleteDriver = async (req, res) => {
  try {
    const driver = await Driver.findByIdAndDelete(req.params.id);
    if (!driver) return res.status(404).json({ message: "Driver not found" });
    res.json({ message: "Driver deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc   Assign vehicle to driver
// @route  PUT /api/drivers/:id/assign/:vehicleId
// @access Manager only
exports.assignVehicle = async (req, res) => {
  try {
    const driver = await Driver.findById(req.params.id);
    const vehicle = await Vehicle.findById(req.params.vehicleId);
    if (!driver || !vehicle) return res.status(404).json({ message: "Driver/Vehicle not found" });

    driver.assignedVehicle = vehicle._id;
    await driver.save();
    res.json(driver);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

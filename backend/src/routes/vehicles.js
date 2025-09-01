const express = require('express');
const router = express.Router();
const Vehicle = require('../models/Vehicle');
const { protect } = require('../middleware/auth');
const { authorize } = require('../middleware/roles');

// Create
router.post('/', protect, authorize('manager'), async (req, res)=>{
  try{
    const v = await Vehicle.create(req.body);
    res.status(201).json(v);
  }catch(e){ res.status(400).json({ message: e.message }); }
});

// Read all (with simple query params for search/sort)
router.get('/', protect, async (req, res)=>{
  const { q, sortBy = 'createdAt', order = 'desc' } = req.query;
  const filter = q ? { busNumber: { $regex: q, $options: 'i' } } : {};
  const vehicles = await Vehicle.find(filter).sort([[sortBy, order]]);
  res.json(vehicles);
});

// Read one
router.get('/:id', protect, async (req, res)=>{
  const v = await Vehicle.findById(req.params.id);
  res.json(v);
});

// Update
router.put('/:id', protect, authorize('manager'), async (req, res)=>{
  const v = await Vehicle.findByIdAndUpdate(req.params.id, req.body, { new:true });
  res.json(v);
});

// Delete
router.delete('/:id', protect, authorize('manager'), async (req, res)=>{
  await Vehicle.findByIdAndDelete(req.params.id);
  res.json({ message:'Deleted' });
});

module.exports = router;

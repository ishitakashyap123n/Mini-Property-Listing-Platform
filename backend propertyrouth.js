const express = require('express');
const Property = require('../models/Property');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// @desc    Fetch all properties
// @route   GET /api/properties
// @access  Public
router.get('/', async (req, res) => {
  try {
    const properties = await Property.find({});
    res.json(properties);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @desc    Fetch single property by ID
// @route   GET /api/properties/:id
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);

    if (property) {
      res.json(property);
    } else {
      res.status(404).json({ message: 'Property not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @desc    Add a new property
// @route   POST /api/properties
// @access  Private (Admin Only)
router.post('/', protect, async (req, res) => {
  const { title, price, location, image, description } = req.body;

  if (!title || !price || !location || !description) {
    return res.status(400).json({ message: 'Please enter all required fields' });
  }

  try {
    const newProperty = new Property({
      title,
      price,
      location,
      image,
      description,
    });

    const createdProperty = await newProperty.save();
    res.status(201).json(createdProperty);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;

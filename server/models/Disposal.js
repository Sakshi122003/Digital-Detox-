const mongoose = require('mongoose');

const DisposalSchema = new mongoose.Schema({
  size: {
    type: String,
    required: true
  },
  item: {
    type: String,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  points: {
    type: Number,
    required: true
  },
  couponCode: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Disposal', DisposalSchema);
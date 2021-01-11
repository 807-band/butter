const mongoose = require('mongoose');

const StationItemSchema = mongoose.Schema({
  text: { type: String, required: true },
  required: { type: Boolean, default: false}
});

const StationGroupSchema = mongoose.Schema({
  title: { type: String, required: true },
  items: [StationItemSchema]
});

const StationSchema = mongoose.Schema({
  title: { type: String, required: true },
  desc: String,
  maxFailed: { type: Number, default: 0 },
  level: {
    type: String,
    enum: ['beginner', 'advanced'],
    required: true
  },
  order: Number,
  groups: [StationGroupSchema]
});

module.exports.schema = StationSchema;

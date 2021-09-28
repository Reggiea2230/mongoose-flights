const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const flightSchema = new mongoose.Schema({
    airlines: String,
    airports: String,
    flightNo: Number,
    departs: Date
});

module.exports = mongoose.model('Flight', flightSchema);
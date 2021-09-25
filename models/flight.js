const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const flightSchema = new mongoose.Schema({
    airlines: String,
    airport: String,
    flightNo: Number,
    departs: Date
});

module.exports= mongoose.model('Flights', flightSchema);
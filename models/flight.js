const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    seat: {type: String, match: /[A-F][1-9]\d?/},
    price: Number,
    flight: Schema.Types.ObjectId 
  });

const destinationSchema = new Schema({
    airport: String,
    arrival: Date
});

const flightSchema = new Schema({
    title: String,
    airlines: String,
    airports: String,
    flightNo: Number,
    departs: Date,
    destinations: [destinationSchema],
    tickets: [ticketSchema]
});




module.exports = mongoose.model('Flight', flightSchema);
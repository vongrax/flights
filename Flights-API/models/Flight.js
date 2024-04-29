const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const FlightSchema = new Schema({
    flightNumber: {
        type: String,
        required: true
    },
    airline: {
        type: String,
        required: true
    },
    departureCity: {
        type: String,
        required: true
    },
    arrivalCity: {
        type: String,
        required: true
    },
    aircraftType: {
        type: String,
        required: true
    },
    departureTime: {
        type: String,
        required: true
    },
    arrivalTime: {
        type: String,
        required: true
    },
    actualDepartureTime: {
        type: String,
        required: true
    },
    actualArrivalTime: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    comment: {
        type: String,
    }
});

const Flight = mongoose.model('flights', FlightSchema);

module.exports = Flight;
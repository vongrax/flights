const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose')

const flights = require('./app/flights');

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());

const run = async () => {

    await mongoose.connect('mongodb://db/flights')

    app.use('/flights', flights);

    app.listen(port, () => {
        console.log('HTTP Server is started')
    });
}

run().catch(e => {
    console.log(e);
});

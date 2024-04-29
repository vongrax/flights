const express = require('express');
const Flight = require('../models/Flight');

const router = express.Router();

router.get('/', async (req, res) => {
    const flights = await Flight.find()

    res.send(flights);
})

router.get('/:id', async (req, res) => {
    const flightId = req.params.id;

    const flight = await Flight.findById(flightId)

    res.send(flight);
})

router.put('/', async (req, res) => {
    const flightId = req.body._id;

    try {
        await Flight.findOneAndUpdate({_id: flightId}, {...req.body})
        res.send('updated')
    } catch (e) {
        return res.status(400).send(e)
    }

})

router.post('/', async (req, res) => {
    const flight = req.body;

    const flights = new Flight(flight)

    try {
        await flights.save()
        res.send({id: flights._id});
    } catch (e) {
        return res.status(400).send(e)
    }

})
router.delete('/:id', async (req, res) => {

    const flightId = req.params.id

    console.log(flightId)

    try {
        await Flight.findByIdAndDelete(flightId)
        res.send('ok')
    } catch (e) {
        return res.status(400).send(e)
    }


})

module.exports = router;
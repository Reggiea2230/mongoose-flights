const Ticket = require('../models/flight');

module.exports = {
    create,
    new: newTicket
};

function create (req, res) {
    res.send('omg its working')
};

function newTicket (req, res) {
    res.render('tickets/new')
};
const express = require('express');
const router = express.Router();

const ticketsControllers = require('../controllers/tickets');

router.post('/flights/:id', ticketsControllers.create);
router.get('/tickets', ticketsControllers.new);


module.exports = router; 
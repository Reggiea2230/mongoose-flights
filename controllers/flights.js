const Flight = require("../models/flight");

// const newFlight = new Flight();


module.exports = {
    new: newFlight,
    create,
    index,
    show
};


function newFlight(req, res){
   res.render('flights/new', {title: "New Flight"});
}

function show(req, res){
    Flight.findById(req.params.id, function (err, flight){
        res.render('flights/show', {airline: 'Airline Detail', flight});
    });
}

function index(req, res){

    Flight.find({}, function (err, flightDocuments){
        res.render("flights/index", { flightDocuments, title: "Flights"});
        console.log(flightDocuments, "<--- movie documnets")
    });
}


   
    
    function create(req, res) {
        console.log(req.body);

        req.body.flightNo = parseInt(req.body.flightNo)
        req.body.departs = parseInt(req.body.departs);
        req.body.date = parseInt(req.body.date)

        const flight = new Flight (req.body);
        flight.save(function(err) {
            if (err) return res.render('flights/new');
            console.log(flight, '<- createdFlight');
            res.redirect('/flights');
        });
    }



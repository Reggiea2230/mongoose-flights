const flight = require("../models/flight");
const Flight = require("../models/flight");
// const newFlight = new Flight();


module.exports = {
    new: newFlight,
    create,
    index
};


function newFlight(req, res){
   res.render('flights/new');
}

function index(req, res){

    Flight.find({}, function (err, flightDocuments){
        res.render("flights/index", {flights: flightDocuments});
        console.log(flightDocuments, "<--- movie documnets")
    });
}



function create(req, res) {
    //departs
    req.body.departs = parseInt(req.body.departs);

    
    
    
Flight.create(req.body, function (err, createdFlight) {
            console.log(req.body);
    if(err) { 
        return res.redirect("/flights/new");
        }
        
        console.log(createdFlight, "createdFlight");

        res.redirect(`/flights/${createdFlight._id}`);
    });

}



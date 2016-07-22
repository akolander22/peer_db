var router = require('express').Router();

var Assignments = require('../models/assignment');

router.get('/', function(request, response){
  Assignments.find({}, function(err, assignment){
    if(err){
      console.log(err);
      response.sendStatus(500);
    } else {
      response.send(assignment);
    }
  })
})

router.post('/createData', function(request, response){
  console.log('Yay, new data');
  var data = request.body;

  var createdAssignment = new Assignment ({
      assignment_number: 1,
      student_name: "Andrew",
      score: 5,
      date_completed: new Date ()
      })

  createdAssignment.save(function(err){
    if(err){
      console.log('Did not save', err);
      response.sendStatus(500);
    } else {
      response.sendStatus(200);
    }
  })
})

module.exports = router;

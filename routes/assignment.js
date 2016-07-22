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

  var createdAssignment = new Assignments ({
      assignment_number: data.assignment_number,
      student_name: data.student_name,
      score: data.score,
      date_completed: new Date ()
      })

      console.log(data.score);

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

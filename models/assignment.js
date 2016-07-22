var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var assignment = new Schema ({
  assignment_number: Number,
  student_name: String,
  score: Number,
  date_completed: Date
})

var Assignments = mongoose.model('Assignments', assignment);

module.exports = Assignments;

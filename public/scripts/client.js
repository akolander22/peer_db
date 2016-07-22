angular.module('assignmentApp', []);

angular.module('assignmentApp').controller('AssignmentController', function($http){
  var vm = this;

  var handleSuccess  = function (res){
    console.log("Success",res);
    vm.assignmentList = res.data;
  }

  var handleFailure  = function (res){
    console.log("Failure",res);
  }
$http.get('/assign/').then(handleSuccess,handleFailure )



  vm.submitAssignments = function(){
    console.log("GOod ON ya for clicking! ");

    var sendData = {};

    sendData.assignment_number = vm.assignment_number;
    sendData.student_name = vm.student_name;
    sendData.score = vm.score;

    $http.post('/assign/createData', sendData).
    then(function(response,handleSuccess,handleFailure ){

      var handleSuccess  = function (res){
        console.log("Success",res);
      }

      var handleFailure  = function (res){
        console.log("Failure",res);
      }
    })
}

});

var app = angular.module("app", []); // defines d MODULE for d application (cos of d [] which will contain dependencies)
$( function() {
  from = $( "#from" ).datepicker({
    dateFormat: "yy-mm-dd",
    changeMonth: true,
    changeYear: true,
    numberOfMonths: 1,
    maxDate: new Date(),
    onClose: function(selectedDate) {
      $("#to").datepicker("option", "minDate", selectedDate);
    }
  });
  to = $( "#to" ).datepicker({
    dateFormat:"yy-mm-dd",
    changeMonth: true,
    changeYear: true,
    numberOfMonths: 1,
    maxDate: new Date(),
    onClose: function(selectedDate) {
      $("#to").datepicker("option", "maxDate", selectedDate);
    }
  });
});

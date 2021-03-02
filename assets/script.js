let date =moment();
var projectName = ""
var projectType = ""
var hourlyRate = 0
var dueDate = ""
var dueDays = ""
var totalEarnings = 0

$('#date').text(date.format("MMM Do, YYYY"));

date.textcontent = moment().format("MMM Do, YY");
calcMoney = function () {
    hourlyRate = hourlyRate.toFixed(2)
    personHours = (dueDays * 8)
    totalEarnings = (hourlyRate * personHours)

}
$ ( function(){
 $("#datepicker").datepicker();
});


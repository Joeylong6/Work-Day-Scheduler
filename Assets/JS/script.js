//displaying the day and time in the jumbotron

var todayDate = moment().format("dddd, MMM Do");
$("#currentDay").html(todayDate);

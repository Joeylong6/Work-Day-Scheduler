//displaying the day and time in the jumbotron

var todayDate = moment().format("dddd, MMM Do");
$("#currentDay").html(todayDate);

// adding a click event listener to the save button
$(document).ready(function () {
  $(".saveButton").on("click", function () {
    event.preventDefault();
    // Get nearby values of the description in JQuery
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // Save text in local storage
    sessionStorage.setItem(time, text);
  });

  function WhatTimeIsIt() {
    //get current number of hours.
    var timeNow = moment().hour();

    // A for each loop looping over the timeblocks
    $(".timeblock").each(function () {
      var blockTime = parseInt($(this).attr("id").split("hr")[1]);

      // To check the current time and update the colour scheme to reflect NOW
      if (blockTime < timeNow) {
        $(this).removeClass("future");
        console.log(this);
        $(this).removeClass("present");
        $(this).addClass("past");
      } else if (blockTime === timeNow) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      } else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
    });
  }

  // rendering saved data from local storage

  $("#hr9 .description").val(localStorage.getItem("hr9"));
  $("#hr10 .description").val(localStorage.getItem("hr10"));
  $("#hr11 .description").val(localStorage.getItem("hr11"));
  $("#hr12 .description").val(localStorage.getItem("hr12"));
  $("#hr13 .description").val(localStorage.getItem("hr13"));
  $("#hr14 .description").val(localStorage.getItem("hr14"));
  $("#hr15 .description").val(localStorage.getItem("hr15"));
  $("#hr16 .description").val(localStorage.getItem("hr16"));
  $("#hr17 .description").val(localStorage.getItem("hr17"));

  WhatTimeIsIt();
});

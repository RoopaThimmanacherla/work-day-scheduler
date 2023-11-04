// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var currentDay = $("#currentDay");
currentDay.text(dayjs().format("dddd,MMMM DD"));

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  $(".saveBtn").on("click", function () {
    var time = $(this).parent().attr("id").substring(5);
    console.log(time);
    var text = $(this).siblings(".description").val();
    console.log(text);
    localStorage.setItem(JSON.stringify(time), JSON.stringify(text));
  });
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  updateTimeBlock();
  function updateTimeBlock() {
    var currentHour = dayjs().hour();
    console.log(currentHour);
    $(".time-block").each(function () {
      var currentBlockHour = parseInt($(this).attr("id").substring(5));
      if (currentBlockHour < currentHour) {
        $(this).addClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future");
      }

      if (currentBlockHour === currentHour) {
        $(this).addClass("present");
        $(this).removeClass("past");
        $(this).removeClass("future");
      }

      if (currentBlockHour > currentHour) {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  $("#hour-9 .description").val(JSON.parse(localStorage.getItem("9")));

  $("#hour-10 .description").val(JSON.parse(localStorage.getItem("10")));

  $("#hour-11 .description").val(JSON.parse(localStorage.getItem("11")));

  $("#hour-12 .description").val(JSON.parse(localStorage.getItem("12")));

  $("#hour-13 .description").val(JSON.parse(localStorage.getItem("13")));

  $("#hour-14 .description").val(JSON.parse(localStorage.getItem("14")));

  $("#hour-15 .description").val(JSON.parse(localStorage.getItem("15")));

  $("#hour-16 .description").val(JSON.parse(localStorage.getItem("16")));

  $("#hour-17 .description").val(JSON.parse(localStorage.getItem("17")));

  // TODO: Add code to display the current date in the header of the page.
});

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

// Use Day.js to format the date
var today = dayjs();
$('#today').text(today.format('MMM D, YYYY'));

console.log("display todays date");

  //Gets hour from each of the time blocks and compares it to current time
  $(".time-block").each(function () {
    var timeBlock = $(this).attr("id");
    
    var blockHour = Number(timeBlock.split("-")[1]);
    
    console.log(blockHour);

    var currentHour = dayjs().hour();
    console.log(typeof currentHour)
    console.log(currentHour)

    if (currentHour == blockHour) {
      $(this).attr("class", "present row time-block");
    } else if (currentHour < blockHour) {
      $(this).attr("class", "future row time-block");
    } else if (currentHour > blockHour) {
      $(this).attr("class", "past row time-block");
    }
  });

  console.log("show time blocks status");

  // saves data to be used in localStorage; event listener
  $(".saveBtn").on("click", function () {
    var saveIndex = $(this).parent().attr("id");
    var inputValue = $(this).siblings(".description").val();
    
    // This saves it in local storage
    localStorage.setItem(saveIndex, inputValue);
  });

  console.log("save data locally");

  //Gets items from local storage and sets them in places
  $("#hour-09 .description").val(localStorage.getItem("hour-09"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));
});
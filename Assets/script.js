// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
//This is similar to $(document).ready(function) which prevents JQuery from loading before
//the entire document finish loading.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  $(".saveBtn").click("onClick",function() {
    console.log("I am clicked.");
    localStorage.setItem('time', 'text');
    console.log("I am storing.");
    localStorage.getItem('text');
    alert("It's retrieved.")

  //Do I need a form?


  })
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? 
  
  // Get the current hour
let currentHour = dayjs().hour();

// Loop through each time block
$(".time-block").each(function() {
  // Get the hour from the time block id
  let blockHour = parseInt($(this).attr("id").split("hour")[1]);

  // Compare the block hour to the current hour and apply class accordingly
  //Here are the conditions for the hour blocks to change
  if (blockHour < currentHour) {
    $(this).addClass("past");
    $(this).removeClass("present");
    $(this).removeClass("future");

  } else if (blockHour === currentHour) {
    $(this).addClass("present");
    $(this).removeClass("past");
    $(this).removeClass("future");

  } else {
    $(this).addClass("future");
    $(this).removeClass("past");
    $(this).removeClass("present");
  }
});


  //How can Day.js be used to get the
  // current hour in 24-hour time?
  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this? Need Help

  
  
  // TODO: Add code to display the current date in the header of the page.
  //I need help with changing timezone. 
  const now = dayjs();
$("#currentDay").text(now);
 
});

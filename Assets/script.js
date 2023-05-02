//This is similar to $(document).ready(function) which prevents JQuery from loading before
//the entire document finish loading.
$(document).ready(function(){



$(function () {
  $(".saveBtn").on("click", function () {
    //Step 1 get data from text box.
    //Step 2 save data to the local storage. 
    var values = $(this).siblings('.description').val()
var time = $(this).parent().attr('id')
    localStorage.setItem(time, values)
  })
  
  // Get the current hour
  let currentHour = dayjs().hour();

  // Loop through each time block
  $(".time-block").each(function () {
    // Get the hour from the time block id
    let blockHour = parseInt($(this).attr("id").split("-")[1]);
    console.log(blockHour)
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

  //Get from local storage
  $('#hour-8 .description').val(localStorage.getItem("hour-8"))
  $('#hour-9 .description').val(localStorage.getItem("hour-9"))
  $('#hour-10 .description').val(localStorage.getItem("hour-10"))
  $('#hour-11 .description').val(localStorage.getItem("hour-11"))
  $('#hour-12 .description').val(localStorage.getItem("hour-12"))
  $('#hour-13 .description').val(localStorage.getItem("hour-13"))
  $('#hour-14 .description').val(localStorage.getItem("hour-14"))
  $('#hour-15 .description').val(localStorage.getItem("hour-15"))
  $('#hour-16 .description').val(localStorage.getItem("hour-16"))
  $('#hour-17 .description').val(localStorage.getItem("hour-17"))
});
})
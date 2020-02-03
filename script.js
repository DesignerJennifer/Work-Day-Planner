//moment retrieves the current date from the system, and formats the date by day, month and year
var currentDate = moment().format("dddd, MMMM Do YYYY");

//takes the day, month and year data and displays it in the ID currentDay paragraph
document.getElementById("currentDay").innerHTML = currentDate;

//Current hour is genereated by calling the moment.js fuction that targets the current hour
var currentHour = moment().hour();
//console.log(currentHour)

//hourValues grabs the data as military time in order to create unique labels for the time
var hourValues = [9, 10, 11, 12, 13, 14, 15, 16, 17];

//hourBlocks is telling us the length of time each input field on the planner represents.
var hourBlocks = moment.duration(1, 'hours');

//dynamically generated planner rows/columns

//Creating the fuction that creates the day planner
function showPlanner() {
  //for loop that loop thorugh the hourvalues index
  for (let index = 0; index < hourValues.length; index++) {
    //
    var row = $("<div class='row'>")
    var col1 = $("<div class='col-sm-2 text-right'>")

    col1.html(hourValues[index] + ":00 AM")

    if (hourValues[index] >= 12) {
      var hours = hourValues[index] - 12;
      if (hours === 0) {
        (hours = 12)
      }
      col1.html(hours + ":00 PM")
    }

    var col2 = $("<div class='col-sm-8'>")

    var   textarea = $("<textarea class='form-control'>")
    
    if(currentHour < hourValues[index]) {
      textarea = $("<textarea class='form-control bg-success text-white'>")

    }
    else if(hourValues[index] === currentHour) {
      textarea = $("<textarea class='form-control bg-danger text-white'>")

    }
    else   {
      textarea = $("<textarea class='form-control bg-secondary text-white'>");

    }
    textarea.attr("id", "textarea" + index)

    var getTextareaValue = localStorage.getItem("textarea" + index);
    textarea.text(getTextareaValue);

    col2.append(textarea)
    var col3 = $("<div class='col-sm-2'>")
    var saveBtn = $("<button class='btn btn-primary saveBtn'>")
    saveBtn.text("Save")
    col3.append(saveBtn)
    row.append(col1, col2, col3)
    $(".planner").append(row)
  }

}
showPlanner()

$(".saveBtn").on("click", function() {
      for (let index = 0; index < hourValues.length; index++) {
               var getTextareaValue = $("#textarea" + index).val();
               localStorage.setItem("textarea" + index, getTextareaValue);
          
               
      }
})

// //default color (time passed)
// $("textarea.form-control").css("background-color","lightgrey");

// function futureApp() {

//   var hourValues = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 1, 2, 3, 4, 5, 6, 7, 8];
  
//   if (currentHour <= hourValues.length[index]) {
//     $("textarea.form-control").css("background-color","green");
//   }

// }




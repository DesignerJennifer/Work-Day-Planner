//moment retrieves the current date from the system, and formats the date by day, month and year
var currentDate = moment().format("dddd, MMMM Do YYYY");

//takes the day, month and year data and displays it in the ID currentDay paragraph
document.getElementById("currentDay").innerHTML = currentDate;

//Current hour is genereated by calling the moment.js fuction that targets the current hour
var currentHour = moment().hour();
//console.log(currentHour)

//Hours are listed in an array, using military time.
var hourValues = [9, 10, 11, 12, 13, 14, 15, 16, 17];

//The length of time each input field represents is 1 hour
var hourBlocks = moment.duration(1, 'hours');

//Creating the fuction that creates the day planner
function showPlanner() {
  //for loop that loop thorugh the hourvalues index
  for (let index = 0; index < hourValues.length; index++) {
    //this creates a row for the planer
    var row = $("<div class='row'>")
    //this creates the columns for the planner
    var col1 = $("<div class='col-sm-2 text-right'>")

    //this formats the time to display with zeros and shows the times as AM
    col1.html(hourValues[index] + ":00 AM")

    //Because the time in the index is referenced in military time, this function converts the time to an AM/PM format 
    if (hourValues[index] >= 12) {
      //the hour blocks are organized in an array, and each time is subtracted by 12 to arrive at the AM/PM format.
      var hours = hourValues[index] - 12;
      //if he hour is equal to 0, then 
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
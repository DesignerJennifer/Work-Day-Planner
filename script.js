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
    
    //Creates a row for the planer
    var row = $("<div class='row'>")
    
    //Creates the columns for the planner
    var col1 = $("<div class='col-sm-2 numBorder timeStyle text-right'>")

    //Formats the time to display with zeros and shows the times as AM
    col1.html(hourValues[index] + ":00 AM")

    //Converts military time to an AM/PM format by subtracting 12 from each number
    if (hourValues[index] >= 12) {

      //the hour blocks are organized in an array, and each time is subtracted by 12 to arrive at the AM/PM format.
      var hours = hourValues[index] - 12;
      
      //sets midnight to the number 12 rather than zero
      if (hours === 0) {
        (hours = 12)
      }
      //add the PM lable to hours after noon
      col1.html(hours + ":00 PM")
    }

    //text input box
    var col2 = $("<div class='col-sm-8 textInput'>")

    //save button for text area
    var textarea = $("<textarea class='form-control'>")
    
    //sets the color of the columns based on the time of day
    if(currentHour < hourValues[index]) {

      //upcomming hour
      textarea = $("<textarea class='form-control bg-success text-white'>")
    }
    else if(hourValues[index] === currentHour) {
      //current time
      textarea = $("<textarea class='form-control bg-danger text-white'>")
    }
    else   {
      //past hour
      textarea = $("<textarea class='form-control bg-secondary text-white'>");
    }


    textarea.attr("id", "textarea" + index)

    var getTextareaValue = localStorage.getItem("textarea" + index);
    textarea.text(getTextareaValue);

    col2.append(textarea)
    var col3 = $("<div class='col-sm-2 textInput'>")
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
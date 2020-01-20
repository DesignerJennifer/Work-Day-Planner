//Displays current date.
var currentDay = moment().format("dddd, MMMM Do YYYY");
console.log(currentDay)

//Displays current hour
var currentHour = moment().format("HH");
console.log(currentHour)

var timeDisplay = ["nine", "ten", "eleven", "noon", "one", "two", "three", "for", "five"];
var hourValues = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var hourBlocks = moment.duration(1, 'hours');

function showPlanner() {
  for (let index = 0; index < hourValues.length; index++) {
    var row = $("<div class='row'>")

    var col1 = $("<div class='col-sm-2 text-right'>")

    col1.html(hourValues[index] + ":00 AM")

    if (hourValues[index] >= 12) {
      var hours = hourValues[index] - 12;
      if (hours === 0) {
        timeDisplay === 12
      }
      col1.html(hours + ":00 PM")

    }

    var col2 = $("<div class='col-sm-8'>")
    var textarea = $("<textarea class='form-control'>")
    col2.append(textarea)
    var col3 = $("<div class='col-sm-2'>")
    var saveBtn = $("<button class='btn btn-primary'>")
    saveBtn.text("Save")
    col3.append(saveBtn)
    row.append(col1, col2, col3)
    $(".planner").append(row)

  }
}

showPlanner()

$("#currentDay").text(currentDay);



function timeDisplay() {
  moment(hourValues).isBefore(currentDay)

  timeDisplay = past


  if (hourValues[i] === currentDay)
    timeDisplay = current

  if (hourValues[i] < currentDay)
    timeDisplay = future
}






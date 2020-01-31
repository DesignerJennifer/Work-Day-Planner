//Displays current date.
var currentDate = moment().format("dddd, MMMM Do YYYY");
document.getElementById("currentDay").innerHTML = currentDate;

//Displays current hour
var currentHour = moment().format("HH");
console.log(currentHour)

var timeDisplay = ["nine", "ten", "eleven", "noon", "one", "two", "three", "for", "five"];
var hourValues = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 1, 2, 3, 4, 5, 6, 7, 8];
var hourBlocks = moment.duration(1, 'hours');

//dynamically generated planner rows/columns
function showPlanner() {
  for (let index = 0; index < hourValues.length; index++) {
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
    var textarea = $("<textarea class='form-control'>")
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


//default color (time passed)
$("textarea.form-control").css("background-color","lightgrey");

function futureApp() {
  if (currentHour <= hourValues.length[index]) {
    $("textarea.form-control").css("background-color","green");
  }

}

$("saveBtn").on("click", "textarea", function(){
  var test = localStorage.getItem("test");
  var obj = [];
  if(test){
      obj= JSON.parse(test);  
  }
  obj.push({"id":  id, "name":name});
  localStorage.setItem("test",JSON.stringify(obj));
});



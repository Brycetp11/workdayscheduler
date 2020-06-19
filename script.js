// create reference for the current day using id= currentDay
var dateToday = $("#currentDay");
dateToday.text(moment().format('dddd MMMM Do, YYYY'));
var currentHour;

// create timeblocks for hours 9am-5pm class= time-block
var dayContainer = $(".container");
var timeHours = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
var taskArray = []

for (let i = 0; i < timeHours.length; i++) {

    function hours (){
        var d = new Date();
        currentHour = d.getHours();
        console.log(currentHour);
    }

    var newRow = $("<row>");
    newRow.addClass("row");
    dayContainer.append(newRow);

    var thisHour = $("<div>");
    thisHour.addClass("hour col-1")
    if (timeHours[i] < 12){
        thisHour.text(timeHours[i] + " AM");
    } else if (timeHours[i] > 12 ){
        thisHour.text((timeHours[i]-12) + " PM");
    } else {
        thisHour.text(timeHours[i] + " PM")
    }

    newRow.append(thisHour);

    var textArea = $("<textarea>");
    textArea.addClass("description time-block col-10")
    if (timeHours[i] == moment().format('LT')){
        textArea.addClass("present");
    } else if (timeHours[i] < currentHour){
        textArea.addClass("past");
    } else if(timeHours[i] > currentHour){
        textArea.addClass("future");
    };
    textArea.attr('id', timeHours[i]);
    newRow.append(textArea);

    var saveButton = $("<button>");
    saveButton.addClass("saveBtn i:hover col-1");
    newRow.append(saveButton);
    saveButton.append("<img src=https://img.icons8.com/metro/26/000000/save.png/>");

    saveButton.click(function(){
        var savingNow = $(this).siblings(".description").val()
        localStorage.setItem('text', savingNow);
        var currentText = localStorage.getItem('text');
        $(this).siblings(timeHours[i]).append(currentText);
        console.log(currentText);
    });
};
 




    // save button at the end of the row saves the text to local storage


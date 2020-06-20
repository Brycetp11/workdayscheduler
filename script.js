var dateToday = $("#currentDay");
dateToday.text(moment().format('dddd MMMM Do, YYYY'));
var currentHour;

var dayContainer = $(".container");
var timeHours = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
var taskArray = [];


for (let i = 0; i < timeHours.length; i++) {

    function hours (){
        var d = new Date();
        currentHour = d.getHours();
        console.log(currentHour);
    }
    hours();

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
    };
    newRow.append(thisHour);

    var textArea = $("<textarea>");
    textArea.addClass("description time-block col-10");
    textArea.addClass(timeHours[i]);
    if (timeHours[i] == currentHour){
        textArea.addClass("present");
    } else if (timeHours[i] < currentHour){
        textArea.addClass("past");
    } else if(timeHours[i] > currentHour){
        textArea.addClass("future");
    };

    newRow.append(textArea);

    var saveButton = $("<button>");
    saveButton.addClass("saveBtn i:hover col-1");
    saveButton.attr('id', timeHours[i])
    newRow.append(saveButton);
    saveButton.append("<img src=https://img.icons8.com/metro/26/000000/save.png/>");

    $("#9").click(function(){
        var savingNine = $(this).siblings(".description").val()
        localStorage.setItem('data9', savingNine);
    });

    $("#10").click(function(){
        var savingTen = $(this).siblings(".description").val()
        localStorage.setItem('data10', savingTen);
    });

    $("#11").click(function(){
        var savingEleven = $(this).siblings(".description").val()
        localStorage.setItem('data11', savingEleven);
    });

    $("#12").click(function(){
        var savingTwelve = $(this).siblings(".description").val()
        localStorage.setItem("data12", savingTwelve);
    });

    $("#13").click(function(){
        var savingOne = $(this).siblings(".description").val()
        localStorage.setItem("data13", savingOne);
    });

    $("#14").click(function(){
        var savingTwo = $(this).siblings(".description").val()
        localStorage.setItem("data14", savingTwo);
    });

    $("#15").click(function(){
        var savingThree = $(this).siblings(".description").val()
        localStorage.setItem("data15", savingThree);
    });

    $("#16").click(function(){
        var savingFour = $(this).siblings(".description").val()
        localStorage.setItem("data16", savingFour);
    });
    
    $("#17").click(function(){
        var savingFive = $(this).siblings(".description").val()
        localStorage.setItem("data17", savingFive);
    });
   
};
function pageStart (){
    var textNine = localStorage.getItem("data9");
    var textTen = localStorage.getItem("data10");
    var textEleven = localStorage.getItem("data11");
    var textTwelve = localStorage.getItem("data12");
    var textOne = localStorage.getItem("data13");
    var textTwo = localStorage.getItem("data14");
    var textThree = localStorage.getItem("data15");
    var textFour = localStorage.getItem("data16");
    var textFive = localStorage.getItem("data17");
    $(".9").append(textNine);
    $(".10").append(textTen);
    $(".11").append(textEleven);
    $(".12").append(textTwelve);
    $(".13").append(textOne);
    $(".14").append(textTwo);
    $(".15").append(textThree);
    $(".16").append(textFour);
    $(".17").append(textFive);
    };
pageStart();
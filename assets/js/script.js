/* 
GIVEN I am using a daily planner to create a schedule [Premise]

WHEN I open the planner [Page loads index]
THEN the current day is displayed at the top of the calendar [Completed]

WHEN I scroll down
THEN I am presented with time blocks for standard business hours [Completed]

WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future [In Progress - JQuery Ignores Statement]

WHEN I click into a time block [Use a grid layout]
THEN I can enter an event [Complete]

WHEN I click the save button for that time block 
THEN the text for that event is saved in local storage [Completed]

WHEN I refresh the page [Completed]
THEN the saved events persist */


var m = moment();
var userHour = moment().hours();

function dynamicCSSchange() {
    $(".row").each(function () {
        console.log(userHour);
        var time = parseInt($(this).attr('id'));
        console.log(time);
        if (userHour > time) {
            $(this).addClass('past');
        } else if (userHour === time) {
            $(this).removeClass('past');
            $(this).addClass('present');
        } else {
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('future');
        }
    });
}

dynamicCSSchange();

function getNewDate() {
    let currentDay = document.getElementById('currentDay');
    let dateTime = m.format('LLLL');
    return currentDay.innerHTML = dateTime
}


getNewDate();


function changeSave() {
    $(".saveBtn").click(function () {
        var time = $(this).parent().attr('id');
        var textArea = $(this).siblings('.col-sm-8').val();
        localStorage.setItem(time, textArea);
    })
}

changeSave();

function getLocalStorage() {
    $('#5 .description').val(localStorage.getItem('5'));
    $('#6 .description').val(localStorage.getItem('6'));
    $('#7 .description').val(localStorage.getItem('7'));
    $('#8 .description').val(localStorage.getItem('8'));
    $('#9 .description').val(localStorage.getItem('9'));
    $('#10 .description').val(localStorage.getItem('10'));
    $('#11 .description').val(localStorage.getItem('11'));
    $('#12 .description').val(localStorage.getItem('12'));
    $('#13 .description').val(localStorage.getItem('13'));
    $('#14 .description').val(localStorage.getItem('14'));
    $('#15 .description').val(localStorage.getItem('15'));
    $('#16 .description').val(localStorage.getItem('16'));
    $('#17 .description').val(localStorage.getItem('17'));
    $('#18 .description').val(localStorage.getItem('18'));
    $('#19 .description').val(localStorage.getItem('19'));
    $('#20 .description').val(localStorage.getItem('20'));
}

getLocalStorage();
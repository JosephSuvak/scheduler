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

$(".time-block").each(function () {
    var userHour = parseInt(m.format('H'));
        console.log(userHour);
        var time = $(this).parent().attr('id');
        console.log(time);
        let idHour = parseInt(time) 
        var textArea = $(this).siblings('.past');
        if (userHour === idHour) {
            $(textArea).removeClass(".past");
            $(textArea).addClass(".present");
        }
        else if (userHour < idHour) {
            $(textArea).removeClass(".past");
            $(textArea).addClass(".future");
        }
    });

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

/*function dynamicCSSchange() {
    //const rows = document.getElementsByClassName("row");
    var userHour = parseInt(m.format('H'));

    /*  

     //create an array for each id-hour for integers. 
    //Create a second array for the moment H. 
    //compare numbers.

    function createTimeNumArray() {
          //Array varaible assignment for each Document ID.
          var [fiveAM, sixAM, sevenAM, eightAM, nineAM, tenAM, elevenAM, noon, onePM, twoPM, threePM, fourPM, fivePM, sixPM, sevenPM, eightPM] = [parseInt(document.getElementById('#5')), parseInt(document.getElementById('#6')), 
          parseInt(document.getElementById('#7')), parseInt(document.getElementById('#8')), parseInt(document.getElementById('#9')), parseInt(document.getElementById('#10')), parseInt(document.getElementById('#11')),
          parseInt(document.getElementById('#12')), parseInt(document.getElementById('#13')), parseInt(document.getElementById('#14')), parseInt(document.getElementById('#15')),parseInt(document.getElementById('#16')),
          parseInt(document.getElementById('#17')), parseInt(document.getElementById('#18')), parseInt(document.getElementById('#19')), parseInt(document.getElementById('#20'))]
          var idHour = [fiveAM, sixAM, sevenAM, eightAM, nineAM, tenAM, elevenAM, noon, onePM, twoPM, threePM, fourPM, fivePM, sixPM, sevenPM, eightPM]
          return idHour
      }
  
  ***** Former Array to grab ID and assign all to a single variable.
  


}

dynamicCSSchange(); */


/* $(".saveBtn").ready(function () {
    //  createTimeNumArray(); [Call not necessary]
    // 'id' is a parent of saveBtn. This grabs the parent.
    var time = $(this).parent().attr('id');
    console.log(time)
    let idHour = parseInt(time) //Converts the string to idHour [Previous Hour]
    var textArea = $(this).siblings('.past');
    if (userHour == idHour) {
        $(textArea).removeClass(".past");
        $(textArea).addClass(".present");
    }

    else if (userHour < idHour) {
        $(textArea).removeClass(".past");
        $(textArea).addClass(".future");
    }

}
); */ 

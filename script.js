var timeView = document.getElementById("timeView");
var alarmView = document.getElementById("alarmView");
var statsView = document.getElementById("statsView");
var dayView = document.getElementById("dayView");
var weekView = document.getElementById("weekView");
var alarmTime = "";
var alarmMinuteDropDown = document.getElementById("alarmMinuteDropDown");
var alarmHourDropDown = document.getElementById("alarmHourDropDown");
var alarmStopped = false;

function onTimeClicked()
{
    timeView.style.display = "inherit";
    alarmsView.style.display = "none";
    statsView.style.display = "none";
    dayView.style.display = "none";
    weekView.style.display = "none";

    var timeText = document.getElementById("timeText");
    var currDate = new Date();
    timeText.innerHTML = currDate.getHours() + ":" + ((currDate.getMinutes() < 10)?"0":"") + currDate.getMinutes();
    
    var alarmStatus = document.getElementById("alarmStatus");
    
    if (alarmTime == "")
    {
        alarmStatus.innerHTML = "Alarm is not currently set";
    }
    else
    {
        alarmStatus.innerHTML = "Alarm is set to " + alarmTime;
    }

};

function onAlarmsClicked()
{
    timeView.style.display = "none";
    alarmsView.style.display = "inherit";
    statsView.style.display = "none";
    dayView.style.display = "none";
    weekView.style.display = "none";
};
function onStatsClicked()
{
    timeView.style.display = "none";
    alarmsView.style.display = "none";
    statsView.style.display = "inherit";
    dayView.style.display = "inherit";
    weekView.style.display = "none";
}
function onDayClicked()
{
    timeView.style.display = "none";
    alarmsView.style.display = "none";
    statsView.style.display = "inherit";
    dayView.style.display = "inherit";
    weekView.style.display = "none";
}
function onWeekClicked()
{
    timeView.style.display = "none";
    alarmsView.style.display = "none";
    statsView.style.display = "inherit";
    dayView.style.display = "none";
    weekView.style.display = "inherit";
}


function onStatsClicked()
{
    timeView.style.display = "none";
    alarmsView.style.display = "none";
    statsView.style.display = "inherit";
    dayView.style.display = "none";
    weekView.style.display = "none";
};

function setAlarm()
{
    alarmTime = alarmHourDropDown.value + ":" + alarmMinuteDropDown.value + " " + alarmAMPMDropDown.value;
    onTimeClicked();
};

function clearAlarm()
{
    alarmTime = "";
    onTimeClicked();
}

function ringAlarm()
{
    alarmStopped = confirm("Press \"OK\" to shut off alarm, or \"Cancel\" to snooze.");
};

function init()
{
    // Initialize drop down menus for the alarm
    for (i = 1; i <= 12; i++)
    {
        var op = document.createElement("option");
        op.text = i;
        alarmHourDropDown.add(op);
    }

    for (i = 0; i <= 59; i++)
    {
        var op = document.createElement("option");
        op.text = ((i < 10) ? "0" : "") + i;
        alarmMinuteDropDown.add(op);
    }

    onTimeClicked();
};

var timeView = document.getElementById("timeView");
var alarmView = document.getElementById("alarmView");
var statsView = document.getElementById("statsView");
var alarmTime = "";
var alarmMinuteDropDown = document.getElementById("alarmMinuteDropDown");
var alarmHourDropDown = document.getElementById("alarmHourDropDown");
var alarmStopped = false;

function onTimeClicked()
{
    timeView.style.display = "inherit";
    alarmsView.style.display = "none";
    statsView.style.display = "none";

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
};

function onStatsClicked()
{
    timeView.style.display = "none";
    alarmsView.style.display = "none";
    statsView.style.display = "inherit";
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

var timeView = document.getElementById("timeView");
var alarmView = document.getElementById("alarmView");
var statsView = document.getElementById("statsView");
var dayView = document.getElementById("dayView");
var weekView = document.getElementById("weekView");
var monthView = document.getElementById("monthView");
var yearView = document.getElementById("yearView");
var alarmTime = "";
var wakeUpTime = document.getElementById("wakeUpTime");
var alarmMinuteDropDown = document.getElementById("alarmMinuteDropDown");
var alarmHourDropDown = document.getElementById("alarmHourDropDown");
var alarmAMPMDropDown = document.getElementById("alarmAMPMDropDown");
var snoozeNumberDropDown = document.getElementById("snoozeNumberDropDown");
var snoozeLengthDropDown = document.getElementById("snoozeLengthDropDown");
var clearAlarmButton = document.getElementById("clearAlarm");
var alarmStopped = false;

function onTimeClicked()
{
    timeView.style.display = "inherit";
    alarmsView.style.display = "none";
    statsView.style.display = "none";
    dayView.style.display = "none";
    weekView.style.display = "none";
	monthView.style.display = "none";
	yearView.style.display = "none";

    var timeText = document.getElementById("timeText");
    var currDate = new Date();
    timeText.innerHTML = currDate.getHours() + ":" + ((currDate.getMinutes() < 10)?"0":"") + currDate.getMinutes();
    
    var alarmStatus = document.getElementById("alarmStatus");
    if (alarmTime == "")
    {
        alarmStatus.innerHTML = "Alarm is not currently set";
        clearAlarmButton.style.display = "none";
    }
    else
    {
        alarmStatus.innerHTML = "Alarm will ring at " + alarmTime + '<br>' + wakeUpTime.innerHTML;
        clearAlarmButton.style.display = "inherit";
    }

};

function onAlarmsClicked()
{
    timeView.style.display = "none";
    alarmsView.style.display = "inherit";
    statsView.style.display = "none";
    dayView.style.display = "none";
    weekView.style.display = "none";
	monthView.style.display = "none";
	yearView.style.display = "none";
};
function onStatsClicked()
{
    timeView.style.display = "none";
    alarmsView.style.display = "none";
    statsView.style.display = "inherit";
    dayView.style.display = "inherit";
    weekView.style.display = "none";
	monthView.style.display = "none";
	yearView.style.display = "none";
}
function onDayClicked()
{
    timeView.style.display = "none";
    alarmsView.style.display = "none";
    statsView.style.display = "inherit";
    dayView.style.display = "inherit";
    weekView.style.display = "none";
	monthView.style.display = "none";
	yearView.style.display = "none";
}
function onWeekClicked()
{
    timeView.style.display = "none";
    alarmsView.style.display = "none";
    statsView.style.display = "inherit";
    dayView.style.display = "none";
    weekView.style.display = "inherit";
	monthView.style.display = "none";
	yearView.style.display = "none";
}

function onMonthClicked()
{
	timeView.style.display = "none";
    alarmsView.style.display = "none";
    statsView.style.display = "inherit";
    dayView.style.display = "none";
    weekView.style.display = "none";
	monthView.style.display = "inherit";
	yearView.style.display = "none";
	
}

function onYearClicked()
{
	timeView.style.display = "none";
    alarmsView.style.display = "none";
    statsView.style.display = "inherit";
    dayView.style.display = "none";
    weekView.style.display = "none";
	monthView.style.display = "none";
	yearView.style.display = "inherit";
}

function onStatsClicked()
{
    timeView.style.display = "none";
    alarmsView.style.display = "none";
    statsView.style.display = "inherit";
    dayView.style.display = "inherit";
    weekView.style.display = "none";
	monthView.style.display = "none";
	yearView.style.display = "none";

};

function setAlarm()
{
    alarmTime = alarmHourDropDown.value + ":" + alarmMinuteDropDown.value + " " + alarmAMPMDropDown.value;
    onTimeClicked();
};

function clearAlarm()
{
    alarmTime = "";
    alarmHourDropDown.value =7;
    alarmMinuteDropDown.value = "00";
    snoozeNumberDropDown.value = 2;
    snoozeLengthDropDown.value = "05";
    updateWakeUpTime();
    onTimeClicked();
}

function ringAlarm()
{
    alarmStopped = confirm("Press \"OK\" to shut off alarm, or \"Cancel\" to snooze.");
};

function updateWakeUpTime()
{
    // Start with current alarm time 
    var wakeHour = parseInt(alarmHourDropDown.value);
    var wakeMinute =  parseInt(alarmMinuteDropDown.value);
    var ampm = alarmAMPMDropDown.value;

    // Find total number of minutes until wake up
    snoozeNumber = parseInt(snoozeNumberDropDown.value);
    snoozeLength = parseInt(snoozeLengthDropDown.value);
    var snoozeTime = snoozeNumber * snoozeLength;


    // Calculate wake up time
    wakeMinute += snoozeTime;

    while (wakeMinute >= 60)
    {
        wakeMinute -= 60;
        wakeHour += 1;
    }

    while (wakeHour >= 12)
    {
        wakeHour -= 12;
        if (ampm == "AM")
            ampm = "PM";
        else
            ampm = "AM";

        if (wakeHour == 0)
        {
            wakeHour = 12;
            break;
        }
    }



    wakeUpTime.innerHTML = "Wake up at " + wakeHour + ":" + ((wakeMinute < 10)?"0":"") + wakeMinute + " " + ampm + "!";
}

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

    for (i = 0; i <= 10; i++)
    {
        var op = document.createElement("option");
        op.text = i;
        snoozeNumberDropDown.add(op);
    }
    
    for (i = 0; i <= 30; i++)
    {
        var op = document.createElement("option");
        op.text = ((i < 10) ? "0" : "") + i;
        snoozeLengthDropDown.add(op);
    }

    clearAlarm();
};

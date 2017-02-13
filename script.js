var timeView = document.getElementById("timeView");
var alarmsView = document.getElementById("alarmsView");
var statsView = document.getElementById("statsView");

function onTimeClicked()
{
    timeView.style.display = "inherit";
    alarmsView.style.display = "none";
    statsView.style.display = "none";
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

function ringAlarm()
{
    alert("The alarm rang WOOOOOOO");
};

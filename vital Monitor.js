let monitor = document.getElementById("section2");
let alarm = document.getElementById("section1");

function setAlarm() {
    var alarmTime = document.getElementById("alarmTime").value;
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var currentDateTime = new Date(0, 0, 0, hours, minutes, seconds);

    var alarmHours = alarmTime.substring(0, 2);
    var alarmMinutes = alarmTime.substring(3, 5);
    var alarmSeconds = 0;
    var alarmDateTime = new Date(0, 0, 0, alarmHours, alarmMinutes, alarmSeconds);
    console.log(alarmMinutes);

    if (alarmDateTime < currentDateTime) {
        alarmDateTime.setDate(alarmDateTime.getDate() + 1);
    }

    var timeToAlarm = alarmDateTime - currentDateTime;

    setTimeout(function() {
        alert("Please Check your vitals");
    }, timeToAlarm);
}

function checkVitals() {
    let monitor = document.getElementById("section2");
    let alarm = document.getElementById("section1");
    monitor.classList.remove("d-none");
    alarm.classList.add("d-none");
}


function button1() {
    event.preventDefault();

    let message = document.getElementById("message");
    let heartRate = document.getElementById("heart-rate");
    if (heartRate.value >= 83) {
        message.textContent = "..Please consult doctor immediately..";
    } else if (heartRate.value >= 79) {
        message.textContent = "Your Heart Rate is in Poor level.";
    } else if (heartRate.value >= 72) {
        message.textContent = "Your Heart Rate is in Average level.";
    } else if (heartRate.value >= 68) {
        message.textContent = "Your Heart Rate is in Above Average level.";
    } else if (heartRate.value >= 64) {
        message.textContent = "Congratulations!! Your Heart Rate is in good level.";
    } else if (heartRate.value >= 58) {
        message.textContent = "Congratulations!! Your Heart Rate is in Excellent level.";
    } else if (heartRate.value >= 54) {
        message.textContent = "Congratulations!! Your Heart Rate is in Athlete level.";
    } else {
        message.textContent = "PLEASE ENTER A VALID NUMBER";
    }

    let blood = document.getElementById("blood");
    let bp = document.getElementById("blood-pressure");
    if (bp.value >= 160) {
        blood.textContent = "HYPERTENSIVE CRISIS (Please consult doctor immediately)";
    } else if (bp.value >= 140) {
        blood.textContent = "High Blood Pressure (HYPERTENSION) Stage 2 .";
    } else if (bp.value <= 129 && bp.value >= 120) {
        blood.textContent = "Your Blood Pressure is ELEVATED.";
    } else if (bp.value >= 130 && bp.value < 140) {
        blood.textContent = "High Blood Pressure (HYPERTENSION) Stage 1.";
    } else if (bp.value < 120 && bp.value >= 80) {
        blood.textContent = "Your Blood Pressure is NORMAL.";
    } else {
        blood.textContent = "PLEASE ENTER A VALID NUMBER";
    }

    let OxygenLevel = document.getElementById("oxygen-levels");
    let oxygen = document.getElementById("oxygen");
    if (OxygenLevel.value == "") {
        oxygen.textContent = "PLEASE ENTER A VALID NUMBER";
    } else if (OxygenLevel.value >= 98 && OxygenLevel.value <= 100) {
        oxygen.textContent = "Oxygen Level is NORMAL";
    } else if (OxygenLevel.value >= 95) {
        oxygen.textContent = "Oxygen Level is INSUFFICIENT (TOLERABLE)";
    } else if (OxygenLevel.value >= 90) {
        oxygen.textContent = "Oxygen Level is LOW (IMMEDIATE LIFESTYLE INTERVENTION NEEDED)";
    } else if (OxygenLevel.value >= 80) {
        oxygen.textContent = "Oxygen Level is CRITICAL (CONSULT SPECIALIST IMMEDIATELY)";
    } else if (OxygenLevel.value >= 70) {
        oxygen.textContent = "Oxygen Level is SEVERE HYPOXIA (HOSPITALISATION NEEDED)";
    } else if (OxygenLevel.value < 70) {
        oxygen.textContent = "DANGER TO LIFE";
    } else {
        oxygen.textContent = "PLEASE ENTER A VALID NUMBER";
    }
}

function button2() {
    monitor.classList.add("d-none");
    alarm.classList.remove("d-none");
}
function convert_To_12_Hour_Time(time) {
    var H = time.substr(0, 2);
    var newTime = time;
    if (H == 0) {
        newTime = time.replace(H, "12");
        newTime += " AM";
    }
    else if (H > 12) {
        newTime = time.replace(H, parseInt(H) - 12);
        newTime += " PM";
    }
    else if (H == 12) newTime += " PM";
    else newTime += " AM";
    console.log(newTime);
}

function convert_To_24_Hour_Time(time) {
    var H = time.substr(0, 2);
    var newTime = time;
    if (time.endsWith("AM")) {
        if (H == 12) {
            newTime = time.replace(H, "00");
            newTime = newTime.slice(0, newTime.length - 2);
        }
        else newTime = newTime.slice(0, newTime.length - 2);
    }
    else {
        if (H == 12) newTime = newTime.slice(0, newTime.length - 2);
        else {
            newTime = time.replace(H, parseInt(H) + 12);
            newTime = newTime.slice(0, newTime.length - 2);
        }
    }
    console.log(newTime);
}

var time = window.prompt('Enter time in hh:mm:ss format ');
if (time.endsWith("AM") || time.endsWith("PM")) convert_To_24_Hour_Time(time);
else convert_To_12_Hour_Time(time);
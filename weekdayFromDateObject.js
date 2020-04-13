function weekdayFromDateObject(dateObject){
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let weekday = days[dateObject.getDay()];
    return weekday;
};
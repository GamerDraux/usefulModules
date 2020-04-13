function dateSuffixes(date){
    date=date.getDate();
    switch (date){
        case "1":
            date=date+"st";
            return date;
            break;
        case "2":
            date=date+"nd";
            return date;
            break;
        case "3":
            date=date+"rd";
            return date;
            break;
        case "21":
            date=date+"st";
            return date;
            break;
        case "22":
            date=date+"nd";
            return date;
            break;
        case "23":
            date=date+"rd";
            return date;
            break;
        case "31":
            date=date+"st";
            return date;
            break;
        default:
            date=date+"th";
            return date;
    };
};
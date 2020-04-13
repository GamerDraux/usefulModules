function isAmOrPm (hours){
    if (hours<12&&hours>0){
        return ("AM");
    } else if(hours<24&&hours>=12){
        return ("PM");
    } else {
        return ("AM");
    }
};

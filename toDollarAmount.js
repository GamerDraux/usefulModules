function toDollarAmount(number){
    function addZerosToCents(cents){
        cents=cents.split(".");
        if (cents.length===1){
            cents.push("00");
        };
        if (cents[1].length===0){
            cents[1]="00";
        } else if(cents[1].length===1){
            cents[1]=cents[1]+"0";
        };
        return cents.join('.');
    }
    dollars = addZerosToCents("$"+`${(Math.round(number*100)/100)}`);
    return dollars;
};
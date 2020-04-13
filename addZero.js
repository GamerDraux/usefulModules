let addZero = function (remainder){
    let seconds = String(remainder);
    if (seconds.length===1){
        seconds ='0'+seconds;
    } else if (seconds.length===0){
        seconds ='00';
    }
    return seconds;
};
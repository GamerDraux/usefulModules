function monthFromDateObject(dateObject){
    let months =["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let thisMonth = months[dateObject.getMonth()];
    return thisMonth;
};
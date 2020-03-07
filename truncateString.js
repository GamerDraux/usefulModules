// cuts a string to the length of the second argument
// returns a shortened message with an ellipsis for formatting, comment out line if using for data
function truncateString (string, desiredLength){
    let shortString=string.substring(0, desiredLength);
    // comment out next line if using for data
    shortString+="..."
    return shortString;
}


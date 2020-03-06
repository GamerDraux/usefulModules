// trims space and returns the first word before a space in a string 
function firstWord(str){
    str=string.trim();
    let n1= str.indexOf(" ");
    return str.substr(0,n1);
}
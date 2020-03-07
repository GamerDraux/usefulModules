// takes an array as an argument, and returns a new array.
// Drains original array.

function sortNumberArray(arr){
    let sortedArray= [];
    let movingNumber = "";
    let arrayLength= arr.length;
    for (let i=0; i<arrayLength; i++){
        movingNumber=arr[0];
            for (let j=0;j<arr.length; j++){
                if (arr[j]<movingNumber){
                movingNumber=arr[j];
                }
        }
    sortedArray.push(movingNumber);
    arr.splice(arr.indexOf(movingNumber),1);     
    }
    return sortedArray;
}

module.exports =sortNumberArray;
//2
//Input
const inputToFindHappiness="You give me the feeling of happiness";
//Regex
const regexPattern = /happiness/gi;
//Function check regex condition
function findHappiness(inputToFindHappiness){
if(regexPattern.test(inputToFindHappiness)){
   return "Hurray";
}else{
    return "There is no happiness.";
}
}
//Output
console.log("2: "+(findHappiness(inputToFindHappiness)));

//4
//Input
const numOfDigits=1305981031;
//Function to count number of digits using regex
function numberOfDigits(numOfDigits){
return (String(numOfDigits).match(/\d/g) || []).length;
}
//Output
console.log("4: "+numberOfDigits(numOfDigits));

//5
//Input
const removeTrailingAndLeading="0003.04000";
//Function removes leading spaces
function removeLeading(removeTrailingAndLeading){
while(removeTrailingAndLeading.charAt(0)==="0"){
    removeTrailingAndLeading=removeTrailingAndLeading.substring(1,removeTrailingAndLeading.length);
}
return removeTrailingAndLeading;
}
//Function removes trailing spaces
function removeTrailing(removeTrailingAndLeading){
    while(removeTrailingAndLeading.charAt(removeTrailingAndLeading.length-1)==="0"){
        removeTrailingAndLeading=removeTrailingAndLeading.substring(0,removeTrailingAndLeading.length-1);
    }
   return removeTrailingAndLeading;
    }
//Output
console.log("5: "+(removeTrailing(removeLeading(removeTrailingAndLeading)))) ;

//6
//Input
const consecutiveLetters="yummy";
//Regex to check consecutive letters
const consecutiveLettersRegex=/(.)\1/;
//Function to check consecutive letters using regex
function doubleLetters(consecutiveLetters){
    if(consecutiveLettersRegex.test(consecutiveLetters)){
        return true ;
    }else{
        return false;
    }
}
//Output
console.log("6: "+(doubleLetters(consecutiveLetters)));


//7
//Input
const atmPin="1234";
//Regex to find 4 or 6 digits
const pinRegex=/^(\d{4}|\d{6})$/;
//Function validate atm ping (4,6 digits)
function validatePin(atmPin){
if(pinRegex.test(atmPin)){
    return true;
}else{
    return false;
}
}
//Output
console.log("7: "+(validatePin(atmPin)))



//8
//Input
const hexCode="#CD5C&C";
//Regex to validate hex code
const hexCodeRegex=/^#([A-Fa-f0-9]{6})$/;
//Function to validate hex code
function isValidHexCode(hexCode){
if(hexCodeRegex.test(hexCode)){
    return true;
}else{
    return false;
}
}
//Output
console.log("8: "+(isValidHexCode(hexCode)));

//9
//Input
const arr=[1, 2, 3, 4, 5, 6];
//Regex
const regex7=/7/;
//Function to check 7 in the array
function sevenBoom(arr){
    const match = arr.find(value => regex7.test(value));
    if(match===7){
        return "Boom!";
    }else{
        return "there is no 7 in the array";
    }
}
//Output
console.log("9: "+(sevenBoom(arr)));

//10
//Input
const ox="ooxXm";
//Regex
const regexX=/x/gi;
const regexO=/o/gi;
//Function 
function XO(ox){
    const xCount = (ox.match(regexX) || []).length;
    const oCount = (ox.match(regexO) || []).length;
    if(xCount===0 && oCount===0){
        return true;
    }else if(xCount===oCount){
        return true;
    }else{
        return false;
    }
}
//Output
console.log("10: "+XO(ox));

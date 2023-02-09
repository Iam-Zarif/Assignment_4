//2
// write a JS code that takes a string and count the length,
//  if the length is even return Even- if odd return Odd. 
//  you should take the correct input

function evenOdd(str){
let theLength = str.length;

if(typeof str !== "string"){
    return "Enter valid string";  
}

else{
    if(theLength %2 === 0){
    return "even";
}
else{
    return "odd";
}
}

}

console.log(evenOdd("string"));
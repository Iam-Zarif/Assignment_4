
//3
//take input and find the difference between them
//if the difference is less than 7- return the subtraction between them
//otherwise return the double value of input 

function isLGSeven(num){
let difference = (num-7);

if(typeof num !== "number"){
  return "Enter valid number";
}

else{
   if (difference < 7) {
     return num - 7;
   } else {
     return num * 2;
   }
}
}
let theNumber = 15;
console.log(isLGSeven(theNumber));


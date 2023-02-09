
/* All the codes should done with the help of function*/

//1
/*description =  input a number, multiply with 3,add with 10, divide by 2, minus 5 -then return the value.You should input a valid Number*/
  

function mindGame(number) {
  if (typeof number !== "number" || number < 0) {
    return "Enter valid Number";
  } else {
    return (number * 3 + 10) / 2 - 5;
  }
}


//1 end

//2
/*description =   write a JS code that takes a string and count the length, if the length is even return Even- if odd return Odd. you should take the correct input*/
  

function evenOdd(theString){
let theLength = theString.length;

if (typeof theString !== "string") {
  return "Enter valid string";
} else {
  if (theLength % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

}



//2 end


//3
/*description =  take input and find the difference between them. if the difference is less than 7- return the subtraction between them. otherwise return the double value of input*/


function isLGSeven(theNumber){
let difference = theNumber - 7;

if (typeof theNumber !== "number") {
  return "Enter valid number";
} else {
  if (difference < 7) {
    return theNumber - 7;
  } else {
    return theNumber * 2;
  }
}
}

//3 end


//4
/*description =  return how many negative numbers of an array. you should take a valid array*/

function findingBadData(data){
  
  let sum = 0;

    if(!Array.isArray(data)){
    return "enter valid array";
  }  
    
else{
    for (let i = 0; i < data.length; i++) {
      if (data[i] < 0) {
        sum++;
      }
    }
    return sum;
}

}

// 4 end


//5
/*description =  suppose you have three friends, 1st friend has  21(1gem = 21) , 2nd has = 32(1 gem =32), 3rd has = 43(1gem =43)
in a function take three parameter of your friends. count total of diamond
 if total is bigger than 1000*2 then return (total - 2000);else return just the total*/





function gemsToDiamond(firstFriend, secondFriend, thirdFriend) {
    
if(typeof firstFriend !== 'number' || typeof secondFriend !== 'number' ||typeof thirdFriend !== 'number' || firstFriend < 0  || secondFriend < 0 || thirdFriend <0)

{
    return "Enter valid gem Number";
}

  else{
    firstFriend = firstFriend * 21;
  secondFriend = secondFriend * 32;
  thirdFriend = thirdFriend * 43;

  let total = firstFriend + secondFriend + thirdFriend;

  if (total > 1000 * 2) {
    return total - 2000;
  } else {
    return total;
  }
  }
}




// 5 end



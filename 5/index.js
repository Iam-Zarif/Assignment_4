
//5
//suppose you have three friends
//1st friend has = 21(1gem = 21) , 2nd has = 32(1 gem =32), 3rd has = 43(1gem =43)
//in a function take three parameter of your friends
//count total of diamond
// if total is bigger than 1000*2 then return (total - 2000);
//else return just the total

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

console.log(gemsToDiamond(100, -3, 1));

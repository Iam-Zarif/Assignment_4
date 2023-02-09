//1
//inputed a number, mulitply with 3,
//  add with 10, divide by 2, minus 5 -
//   then return the value.
//    You should input a valid Number

function mindGame(number) {
  if (typeof number !== "number" || number < 0) {
    return "Enter valid Number";
  } else {
    return (number * 3 + 10) / 2 - 5;
  }
}

console.log(mindGame(33));

//4
//return how many negative numbers of an array. you should take a valid array

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

let str = [-4, -9, -5, -33, -55];
console.log(findingBadData(str));
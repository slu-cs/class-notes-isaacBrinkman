// print sum of squares of integers 1 through 10
let sum = 0
for (var i = 0; i < 10; i++) {
  sum += (i**2)
}

let k = 0
let j = 1
let s = i + j
while(s <= 1000){
  s = k + j;
  k = j;
  j = s;
}

let ssum = 0;
let count = 0;
while(count <= 100){
  if(count%3===0 && count%5!==0){
    ssum ++;
  }
  if(count%3!==0 && count%5===0){
    ssum ++;
  }
  count ++;
}
console.log(ssum);

let start = 11;
count = 0;
while(true){
  for(let i=1; i<= 10; i++){
    if(start%i === 0){
      count ++;
    }
  }
  if(count == 10){
    console.log(start);
    break;
  }
  count = 0;
  start ++;
}

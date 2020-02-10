//Q1
const filter = function(n, f){
  const copy =[];
  for(const a of n){
    if(f(a)){
      copy.push(a);
    }
  }
  return copy
};

const numbers = [1, 2, 3, 4, 5];
console.log(filter(numbers, x => x%2 > 0));

//Q2

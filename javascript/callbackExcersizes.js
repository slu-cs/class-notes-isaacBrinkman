//Q1
const filter = function(n, f){
  const copy =[];
  for(const a in n){
    copy.push(f(n));
  }
  return copy
};

const numbers = [1, 2, 3, 4, 5];
const odds = filter(numbers, x => x%2 > 0);

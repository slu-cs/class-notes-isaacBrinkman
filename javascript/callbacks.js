// Syntax for callbacks

// function uses another fucntion to
// transform an Arrays
const map = function(array, transform){
  const copy=[];
  for(const ele of array){
    copy.push(transform(ele))
  }
  return copy;
};
// function passed above
const square = function(e){
  return x ** 2;
};

const n = [1,2,3,4,5];

console.log(map(n,square));
console.log(n);

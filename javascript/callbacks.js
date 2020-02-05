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
  return e ** 2;
};

const n = [1,2,3,4,5];

console.log(map(n,square));
console.log(n);

// Defining transforms with arrow function
<<<<<<< HEAD
console.log(map(n,x => x**2));
=======
console.log(map(n,x => x**2);
>>>>>>> 764f8163da9b46c28959529bf56683e741b96f60
console.log(map(n,x => x+1));

// built in map
console.log(n.map(x => x**2));

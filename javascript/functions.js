// Function syntax

// defintion
const avg = fucntion(a,b){
  return (a+b)/2;
};

const print = function(a,b){
  console.log(`a=${a}, b=${b}`);
};

// undefined values
const result = print(7,8);
console.log(result);
print(9);

// object with method
const rectangle = {
    width = 10,
    height = 20,
    area: function(){
      return this.width * this.height;
    }
};

// method call
console.log(rectangle.area());

// constructor defintion
const Rectangle = function(width, height){
  this.width = width;
  this.height = height;
}
// shared method
Ractangle.prototype.area = function(){
  return this.width * this.height;
}

// constructing objs
const small = new Rectangle(1,2);
const large = new Rectangle(10,20);

// calls
console.log(small.area());
console.log(large.area());

// Objects and Arrays syntax

// Object literal
const point = {x: 1, y:2};
console.log(point);


// access properties
console.log(point.x);

// change properties
point.x = 3;

// Nested object literal
const circle ={
    center:point,
    radius: 4
};

// also this works
const circle2 ={
  center:{x:3,y:4}
  radius: 4
};

// access sub properties
console.log(circle.center.x);

// undefined subproperties
// prints undefined
console.log(circle.color);
circle.color = "blue";
console.log(circle);

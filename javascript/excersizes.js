// JavaScript Excersizes

const Course = function(s,n){
  this.title = s;
  this.number = n;
};

c1 = new Course('cs', 332);
c2 = new Course('GEO', 104);
c3 = new Course('PSY', 204);

cArray = [c1,c2,c3];

const largest = function(a){
  var large = new Course('',0)
  for(const i of a){
    if i.number > large.number{
      large = i
    }
  }
  return large;
}

console.log(largest(cArray));

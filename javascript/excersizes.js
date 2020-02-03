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
    if (i.number > large.number){
      large = i
    }
  }
  return large;
}

console.log('ans');
console.log(largest(cArray));

// q2

const Book = function(title, author){
    this.title = title;
    this.author = author
}

Book.prototype.authorCheck = function(s){
  for(a of this.author){
    if(a===s){
      return true;
    }
  }
}
b1 = new Book('Poopy', ['Mary','Mat']);
b2 = new Book('Poo',['bob']);

console.log(b1.authorCheck("Mary"));
console.log(b2.authorCheck("<ary"));


// q3
function range(end){
    let arr = []
    for(let i =0; i< end;i++){
      arr.push(i);
    }
    return arr;
}

function range(start, end){
  let arr = []
  for(let i =start; i< end;i++){
    arr.push(i);
  }
  return arr;
}


console.log(range(2,4));
console.log(range(5));

// console and file input

const readline = require('readline');
const fs = require('fs');
// Console config
const user = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// console input
user.question('Enter a filename: ', function(filename) {
  // file config
  const file = readline.createInterface({
    input: fs.createReadStream(filename)
  });
  //asynch line-by-line input
  file.on('line', function(line){
    console.log(line)
  });

  // end the program
  file.on('close', function(){
    process.exit(0);
  });
});

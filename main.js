let Route = require('./route/route-class');
let readlineSync = require('readline-sync');
let result = new Route().execute("main");
console.log(result);
let route = new Route();
let input;
let ok=true;
do {
  input= readlineSync.question();

  let result = route.execute(input);
  console.log(result);
  if(result==="Exit")
  {
    ok=false;
  }
} while (ok);


/*
console.log('----Welcome----');
let index = new Route().execute('main');
console.log(index);

let ok = true;
let route = new Route();

while (ok) {
  let input = readlineSync.question('');
  let result = route.execute(input);
  console.log(result);

  if (result === 'Thanks for using') {
// console.log(result);
    ok = false;
  }

}*/

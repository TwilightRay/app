'use strict'
function sum(a, b) {
  return a + b;
}

function cube(a) {
  return a**3;
}

const sum = (a, b) => a + b;
const cube = a => a ** 3;

console.log(sum(45, 2));
console.log(cube(2));

setTimeout(function() {
  console.log('After one second');
}, 1000)

setTimeout( => () console.log('After one second'), 1000)

//Context
function log() { console.log(this); }

const arrowLog = () => console.log(this);

const person = {
  name: 'Elena',
  age: 20,
  log: log,
  arrowLog: arrowLog,
  delayLog: function() {
    global.setTimeout( () => console.log(this.name + ' ' + this.age), 500)
  }
}
// console.log(global);
person.delayLog();

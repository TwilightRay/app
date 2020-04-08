let a = 24;
if (true) {
  let a = 42;
  console.log('a',  a);
}
console.log(a);

// Hosting
b = 20;
console.log(b);
let b = 20;

function hoisted(age1) {
  this.age1=age;
  age+=1;
  return age;
};

let age = 5;
console.log(hoisted(age));
console.log(age);

// Const
const COLOR = '#ffeebb';
console.log(COLOR);

const array = [1, 2, 3, 5, 8];

console.log(array);
array.push(13);
console.log(array);

const obj = {a: 42};
obj.name = 'Vova';

console.log(obj);

obj.name = 'Victory';
console.log(obj);

// Rest
function average(a, ...args) {//а не входит в массив args
  return args.reduce((acc, i) => acc += i, 0) /args.length;//усредненное значение
}

console.log(average(10, 20, 30, 40, 50));

// Spread
const array = [1, undefined, 3, 5, 8, 13];
console.log(...array); // Разворачиваем массив, делая из него набор элементов

console.log(Math.max(...array));
console.log(Math.max.apply(null, array)); // старый вариант решения
console.log(Math.min(...array));

const fib = [1, ...array]; //удобное клонирование массива
console.log(fib);

// Destructuring
// const a = array[0];
// const b = array[1];
const [a, b = 2, ...c] = array; // Выбор нужных значений в одной строке,
// spread использует оставшиеся значения и забирает их в массив

console.log(a, b, c); //1 2 [ 3, 5, 8, 13 ]

const [k,,m] = array
console.log(k, m);

// Object
const address = {
  country: 'Russia',
  city: 'Moskow',
  street: 'Lenina',
  concat: function () {
    return `'${this.country}, ${this.city}, ${this.street}'`;
  }
}

// const {city, country, street = 'Tverskaya', concat: addressConcat} = address;
// Destructuring внутри объекта
// concat: addressConcat создается не конкат, а адрессКонкат
// street = 'Tverskaya' Если улица не определена, то по умолчанию будет Тверская
// console.log(city);
// console.log(address.concat());
// console.log(concat.call(address));

const {city, ... rest} = address
console.log(city);
console.log(rest);

const newAddress = {...address, street: 'Tverskaya', code: 123}
console.log(newAddress);

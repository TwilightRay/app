const cityField = 'city'

const job = 'Frontend'

const person = {
  age: 26,
  name: 'Irina',
  job, // заранее объявлена. Выводит Frontend
  [cityField + Date.now()]: 'Saint-Peterburg', // Можно описывать динамику,
  //которая станет ключом объекта
  'country-live': 'Russia',
  print: () => 'Person', // не работает с контекстом this
  // возвращает Person
  toString() { // работает с контекстом this
    return Object
    .keys(this)
    .filter( key =>  key !== 'toString' )
    .map( key => this[key] )
    .join(' ')
  }
}

// console.log(person.toString

// Methods
const first = {a: 1}
const second = {b: 2}

// Эквивалентность
console.log(Object.is( 20, 10 )); // false
console.log(Object.is( 20, 20 )); // true

console.log(Object.assign(first, second));

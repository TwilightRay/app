const isReady = true

if (isReady) {
  console.log('Готово');
} else {
  console.log('Не готово!');
}

// Тернарное выражение
isReady ? console.log('Все готово!') : console.log('Все не готово!')

// Новый цикл для итерации значений
const cars = ['Мазда', 'Мерс', 'Порше']

for (var i = 0; i < cars.length; i++) {
  console.log(cars[i])
}

// =

for (var car of cars) {
  console.log(car)
}

// Объекты
const person = {
  firstName: 'Vladimir',
  lastName: 'Feld',
  year: 1998,
  languages: ['Ru', 'En', 'De'],
  hasWife: false,
  greet: function() {
    console.log('greet from person')
  }
}

console.log(person.firstName)
console.log(person['lastName'])
const key = 'year'
console.log(person[key])
person.hasWife = true
person.isProgrammer = true
console.log(person)

person.greet()

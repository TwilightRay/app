// Функция
// function expression - можно использовать только после объявления
const greet2 = function greet2(name) {
  console.log('Привет 2 - ', name)
}

greet('Вова')

// function Declaration - можно использовать до и после объявления
function greet(name) {
  console.log('Привет - ', name)
}

console.dir(greet) // смотрим информацию о функции

// Анонимные функции
let counter = 0
// setInterval(function(){
//   console.log(++counter);
// }, 1000)

// const interval = setInterval(function(){
//   if (counter === 5) {
//     clearInterval(interval) // очистка интервала
//   } else {
//   console.log(++counter)}
// }, 1000)

// стрелочные ф-ции
const arrow = (name) => console.log('Привет 2 - ', name)
arrow('Vova')

const pow2 = num => num**2
console.log(pow2(4.71))

// Параметры по умолчанию
const sum = (a, b = 1+1) => a + b
console.log(sum(18))

function sumAll(...all) {
  let result = 0
  for (let num of all){
    console.log(result)
    result += num
  }
  return result
}

const res = sumAll(1, 2, 3, 4, 5)
console.log(res)

const person = {
  greetb: function () {
    console.log('greet from person')
  }
}

person.greetb()

const string = '   p  p    p     '
console.log(string.trim())

// Замыкания
function createMember(name1) {
  return function (lastName1) {
    console.log(name1 + lastName1) // у этой функции нет доступа к переменной
    // name1 извне, она туда передается через вызов
  }
}

const logWithLastName = createMember('Vova ')
console.log(logWithLastName('Mensh'))
console.log(logWithLastName('Feld'))
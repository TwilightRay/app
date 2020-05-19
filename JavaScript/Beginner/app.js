// Функция
// function expression - можно использовать только после объявления
const greet2 = function greet2(name) {
  console.log('Привет 2 - ', name)
}

greet('Лена')

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

const unterval = setInterval(function(){
  if (vounter === 5) {
    clearInterval(interval)
  } else {
  console.log(++counter)}
}, 1000)

// стрелочные ф-ции

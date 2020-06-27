const cars = ['Мазда', 'Форд', 'БМВ', 'Мерседес']
const people = [
    {name: 'Vladimir', budget: 4200},
    {name: 'Victoriya', budget: 3200},
    {name: 'Mars', budget: 200}
]
const fib = [1, 1, 2, 3, 5, 8, 13]

// Method
cars.push('Порш') // Вставить эл-т в конец массива
cars.unshift('Рено') // Вставить в начало массива
const firstCar =  cars.shift() // удалить первый элемент массива, возвращает этот эл-т
const lastCar = cars.pop() // удаляем и возвращаем последний эл-т массива
console.log(cars, firstCar,  lastCar)

console.log(cars.reverse())

const index = cars.indexOf('БМВ') // возвращает индекс эл-та, который мы ищем
console.log(cars[index] = 'Porsche') // Меняем элемент массива на другой
console.log(cars) //  [ "Мерседес", "Porsche", "Форд", "Мазда" ]

const indexFind = people.findIndex(function (person) {
    // ищем индекс, соответствующий запросу
    return person.budget === 4200
})

console.log(indexFind);
console.log(people[indexFind])

const person = people.find( person => person.budget === 3200)
    // можно найти не индекс, а сам элемент


console.log(person)

let findedPerson
for (const person of people) {
    console.log(person)
    if (person.budget === 4200){
        findedPerson = person
    }
}
console.log(findedPerson)

console.log(cars.includes('Мазда')) // проверяем, есть ли элемент в
// массиве (возвращает логическое значение)

const upperCaseCars = cars.map(car => car.toUpperCase()) // map создаёт новый массив из
// результатов вызова func для каждого элемента
console.log(upperCaseCars)

const pow2 = num => num ** 2
const sqrt2 = num => Math.sqrt(num)

const pow2Fib2 = fib.map(pow2).map(Math.sqrt) // измененный массив уже является массивом и
// его можно еще раз изменить любым методом, а можно просто применить метод ко всем атрибутам массива
console.log(pow2Fib2)

const pow2Fib = fib.map(pow2)
const filteredNumbers = pow2Fib.filter(num => num > 20) // filter возвращает отфильтрованный массив
// по какому-либо условию
console.log(filteredNumbers)

const allBudget = people
    .filter(person => person.budget > 2000)
    .reduce((acc, person) => {
       acc += person.budget
       return acc
    }, 0)
console.log(allBudget)

// Задача: перевернуть строчку
const text = 'Привет, мы изучаем JavaScript'
let reverseText = text.split('').reverse()
console.log(reverseText)
let txet = ''
const txetFunc = () => {
    for (i of reverseText) {
        txet = txet + i
    }
    return txet
}
console.log(txetFunc()) // перевернула строчку целиком

text1 = 'Привет, мы переворачиваем строчку вторым способом'
const reverseText1 = text1.split('').reverse().join('') // join по умолчанию соединяет
// эл-ты массива через запятую, но можно указать другой символ
console.log(reverseText1)


const textObgFilter = people.filter(item => item.name.indexOf('Vladimir') != -1)
console.log(textObgFilter)
function createCalcF(n) {
    return () => 1000 * n
}

const calc = createCalcF(42)
console.log(calc())

function createIncrementor(n) {
    return (num) => n + num
}

const addOne = createIncrementor(1)
const addTen = createIncrementor(10)

console.log(addOne(10))
console.log(addOne(41))
console.log(addTen(10))
console.log(addTen(41))

function urlGenerator(domain) {
    return (url) => `https://${url}.${domain}`
}

const comUrl = urlGenerator('com')
const ruUrl = urlGenerator('ru')

console.log(comUrl('google'))
console.log(ruUrl('yandex'))

function logPerson() {
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}

const person1 = {name: 'Victory', age: 19, job: 'frontend'}
const person2 = {name: 'Vladimir', age: 22, job: 'frontend'}

function bind(person, func) {
    return () => func.call(person)
}

bind(person1, logPerson)()
bind(person2, logPerson)()


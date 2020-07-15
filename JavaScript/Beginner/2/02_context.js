'use strict'
function hello() {
    console.log('Hello', this)
}
const check = {
    checked: 'checked'
}

const person = {
    name: 'Victory',
    age: 19,
    sayHello: hello,
    sayHelloWindow: hello.bind(document),
    logInfo: function (job) {
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.log(`Job is ${job}`)
        console.groupEnd()
    }
}

const vova = {
    name: 'Vladimir',
    age: 22
}

const nastya = {
    name: 'Anastasia',
    age: 17
}

vova.log = person.logInfo.bind(vova, 'frontend vue.js')
person.logInfo.call(person, 'frontend react.js')
person.logInfo.apply(nastya, ['design'])

const array = [1, 2, 3, 4, 5]

function multBy(arr, n) {
   return arr.map((i) => i*n )
}

Array.prototype.mult = function(n) {
    return this.map((i) => i*n )
}

Array.prototype.sub = function(n) {
    return this.map((i) => i-n )
}

console.log(array.mult(13))
console.log(array.sub(13))
const person = {
    name: 'Vladimir',
    age: 22,
    greet: function () {
        return 'Greet'
    }
}

Object.prototype.sayHello = function () {
    return 'Hello'
}

const vika = Object.create(person)
vika.name = 'Victory'

const str = new String('I am string')

Object.prototype.callPerson = function () {
    return person
}

const name = Object.create(vika)
name.name = 'Vika'
function BindBind(context, fn) {
  return function (...args) {
    fn.apply(context, args)
  }
}

function logPerson(p) {
  console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
}

const person1 = {name: 'Vladimir', age: 22, job: 'Frontend'}
const person2 = {name: 'Victory', age: 19, job: 'JavaScript developer'}

BindBind(person1, logPerson)()
BindBind(person2, logPerson)()
